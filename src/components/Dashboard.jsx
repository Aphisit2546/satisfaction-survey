import { useState, useEffect } from 'react';
import { FaArrowLeft, FaSpinner } from 'react-icons/fa';
import { getSurveyResults } from '../services/api';
import './Dashboard.css';

const Dashboard = ({ onBack }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [stats, setStats] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await getSurveyResults();
            console.log('📊 Received stats:', data);
            setStats(data);
            setError(null);
        } catch (err) {
            console.error('Dashboard error:', err);
            setError('ไม่สามารถดึงข้อมูลได้ กรุณาลองใหม่อีกครั้ง');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="dashboard-container loading">
                <FaSpinner className="spinner" />
                <p>กำลังประมวลผลข้อมูล...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="dashboard-container error">
                <p>⚠️ {error}</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button onClick={fetchData} className="nav-button prev-button">ลองอีกครั้ง</button>
                    <button onClick={onBack} className="nav-button prev-button">กลับ</button>
                </div>
            </div>
        );
    }

    return (
        <div className="dashboard-container animate-fade-in">
            <div className="dashboard-header">
                <button onClick={onBack} className="back-icon-btn">
                    <FaArrowLeft />
                </button>
                <h2>สรุปผลความพึงพอใจ</h2>
            </div>

            <p className="total-respondents">
                จำนวนผู้ตอบแบบสอบถามทั้งหมด: <strong>{stats?.totalResponses || 0}</strong> คน
            </p>

            <div className="stats-grid">
                <StatCard
                    title="ด้านการออกแบบ (Design)"
                    stats={stats?.design}
                    color="blue"
                    questions={[
                        'รูปแบบหน้าจอของระบบมีความสวยงามและทันสมัย',
                        'การจัดวางองค์ประกอบบนหน้าจอมีความเหมาะสม',
                        'สีและตัวอักษรของระบบมีความเหมาะสม อ่านง่าย',
                        'การออกแบบโดยรวมช่วยให้ใช้งานระบบได้สะดวก'
                    ]}
                />
                <StatCard
                    title="ด้านคุณภาพระบบ (System Quality)"
                    stats={stats?.quality}
                    color="green"
                    questions={[
                        'ระบบทำงานได้ถูกต้องตามที่ออกแบบไว้',
                        'ระบบมีความรวดเร็วในการประมวลผล',
                        'ระบบมีความเสถียรและไม่เกิดข้อผิดพลาด',
                        'ระบบสามารถใช้งานได้อย่างต่อเนื่อง'
                    ]}
                />
                <StatCard
                    title="ด้านการใช้งาน (Usability)"
                    stats={stats?.usability}
                    color="purple"
                    questions={[
                        'ระบบใช้งานง่ายและไม่ซับซ้อน',
                        'ผู้ใช้สามารถเรียนรู้การใช้งานระบบได้รวดเร็ว',
                        'ขั้นตอนการใช้งานมีความชัดเจน',
                        'ระบบช่วยลดขั้นตอนและเวลาในการทำงาน'
                    ]}
                />
                <StatCard
                    title="ด้านประโยชน์ที่ได้รับ (Usefulness)"
                    stats={stats?.usefulness}
                    color="orange"
                    questions={[
                        'ระบบช่วยเพิ่มประสิทธิภาพในการทำงาน',
                        'ระบบช่วยลดความผิดพลาดในการทำงาน',
                        'ระบบสามารถตอบสนองต่อความต้องการของผู้ใช้งานได้ดี',
                        'ผู้ใช้มีความพึงพอใจในการนำระบบไปใช้งานจริง'
                    ]}
                />
            </div>

            {/* Overall Stats */}
            {stats?.overall && (
                <div style={{ marginTop: '40px' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', color: 'var(--text-main)', fontWeight: '600' }}>สรุปภาพรวม</h3>
                    <div className="stat-card" style={{ borderLeft: '4px solid var(--primary)' }}>
                        <div className="stat-row">
                            <div className="stat-item">
                                <span className="stat-label">ค่าเฉลี่ยรวมทั้งหมด (Mean)</span>
                                <span className="stat-value" style={{ color: 'var(--primary)' }}>
                                    {stats.overall.mean}
                                </span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-label">ส่วนเบี่ยงเบนมาตรฐาน (S.D.)</span>
                                <span className="stat-value" style={{ color: 'var(--primary)' }}>
                                    {stats.overall.stdDev}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const StatCard = ({ title, stats, color, questions }) => {
    const [showDetails, setShowDetails] = useState(false);

    if (!stats) {
        return (
            <div className={`stat-card ${color}`}>
                <h3>{title}</h3>
                <p style={{ textAlign: 'center', color: 'var(--text-light)' }}>ไม่มีข้อมูล</p>
            </div>
        );
    }

    return (
        <div className={`stat-card ${color}`}>
            <h3>{title}</h3>

            {/* Section Summary */}
            <div className="stat-row">
                <div className="stat-item">
                    <span className="stat-label">Mean (x̄)</span>
                    <span className="stat-value">{stats.sectionMean || '0.00'}</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                    <span className="stat-label">S.D.</span>
                    <span className="stat-value">{stats.sectionStdDev || '0.00'}</span>
                </div>
            </div>

            {/* Toggle Details Button */}
            {stats.questions && stats.questions.length > 0 && (
                <button
                    onClick={() => setShowDetails(!showDetails)}
                >
                    {showDetails ? 'ซ่อนรายละเอียด' : 'ดูรายละเอียด'}
                </button>
            )}

            {/* Question Details */}
            {showDetails && stats.questions && (
                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                    {stats.questions.map((q, index) => (
                        <div key={index} className="question-item">
                            <div className="question-text">
                                {index + 1}. {questions[index]}
                            </div>
                            <div className="question-stats">
                                <span>Mean: <strong>{q.mean}</strong></span>
                                <span>S.D.: <strong>{q.stdDev}</strong></span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dashboard;