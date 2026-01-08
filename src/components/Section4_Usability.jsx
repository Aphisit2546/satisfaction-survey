import StarRating from './StarRating';
import appScreenshot from '../assets/img/202615171335369.png';

const Section4_Usability = ({ ratings, onRatingChange }) => {
    const questions = [
        'ระบบใช้งานง่ายและไม่ซับซ้อน',
        'ผู้ใช้สามารถเรียนรู้การใช้งานระบบได้รวดเร็ว',
        'ขั้นตอนการใช้งานมีความชัดเจน',
        'ระบบช่วยลดขั้นตอนและเวลาในการทำงาน'
    ];

    return (
        <div className="section-card">
            <h2 className="section-title">ส่วนที่ 5 : ด้านการใช้งาน (Usability)</h2>

            {/* App Screenshots */}
            <div className="app-screenshots">
                <div className="screenshot-main">
                    <img
                        src={appScreenshot}
                        alt="หน้าจอแอปพลิเคชัน"
                        className="screenshot-full"
                    />
                </div>
            </div>

            {questions.map((question, index) => (
                <StarRating
                    key={index}
                    rating={ratings[`q${index + 1}`]}
                    onRatingChange={(value) => onRatingChange('usability', `q${index + 1}`, value)}
                    question={`${index + 1}. ${question}`}
                />
            ))}
        </div>
    );
};

export default Section4_Usability;