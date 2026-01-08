
import { FaStar, FaChartBar } from 'react-icons/fa';

// Import images
import appScreenshot from '../assets/img/202615171335369.png';
import qrCodeImg from '../assets/img/qrcode_295352192_7422980ee753756d524c79c259e04d37.jpg';
import './Section0_Info.css';

const Section0_Info = ({ onDashboardClick }) => {
    return (
        <div className="section-card">
            <h2 className="section-title">ระบบเปิด-ปิดประตูม้วนเหล็กระยะไกล</h2>

            {/* Dashboard Button - ย้ายมาด้านบน */}
            {/* Dashboard Button */}
            <div className="dashboard-button-container">
                <button
                    type="button"
                    onClick={onDashboardClick}
                    className="dashboard-entry-button"
                >
                    <FaChartBar size={18} />
                    <span>ดูสรุปผลการประเมิน (Dashboard)</span>
                </button>
            </div>

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

            {/* QR Code Section */}
            <div className="qr-code-section">
                <div className="qr-code-box">
                    <img
                        src={qrCodeImg}
                        alt="QR Code สำหรับดาวน์โหลด APK"
                        className="qr-code-image"
                    />
                </div>
                <p className="qr-code-title">QR Code เพื่อโหลดเป็นไฟล์ APK เพื่อทดสอบการใช้งานระบบ</p>
                <p className="qr-code-subtitle">(ใช้ได้แค่ Android)</p>
            </div>

            {/* Warning Messages */}
            <div className="warning-box">
                <p className="warning-text">⚠️ เป็น Demo ไม่ได้เชื่อมต่อกับระบบหรือฐานข้อมูลจริง</p>
                <p className="warning-text">⚠️ หากไม่ทดสอบหรือทดสอบไม่ได้ สามารถดู UI ข้างบนแทนได้เลยครับ</p>
            </div>

            <div className="divider"></div>

            {/* Demo Account Info */}
            <div className="demo-info-box">
                <h3 className="demo-title">เบอร์โทรและ OTP ในการทดสอบ</h3>
                <div className="account-list">
                    <div className="account-item">
                        <span className="account-phone">เบอร์โทร: 081-111-1111</span>
                        <span className="account-otp">OTP: 123456</span>
                    </div>
                    <div className="account-item">
                        <span className="account-phone">เบอร์โทร: 088-888-8888</span>
                        <span className="account-otp">OTP: 888888</span>
                    </div>
                    <div className="account-item">
                        <span className="account-phone">เบอร์โทร: 099-999-9999</span>
                        <span className="account-otp">OTP: 999999</span>
                    </div>
                </div>
            </div>

            <div className="divider"></div>

            {/* System Limitations */}
            <div className="info-box">
                <h3 className="info-title">ข้อจำกัดของระบบ Demo</h3>
                <ul className="info-list">
                    <li className="info-item">
                        ดึงมาแค่ภาพจากกล้องวงจรปิด โดยรีโหลดภาพทุกๆ 0.5 วินาที
                    </li>
                    <li className="info-item">
                        เนื่องจากเป็น Demo ไม่สามารถใช้ปุ่มเมนูแฮมเบอร์เกอร์ได้
                    </li>
                    <li className="info-item">
                        เนื่องจากเป็น Demo เลยไม่ได้พัฒนาในส่วนของตัวเต็มให้ Demo ต่อ
                    </li>
                </ul>
            </div>

            <div className="divider"></div>

            {/* Rating Scale */}
            <div className="rating-scale-box">
                <h3 className="rating-scale-title">⭐ ระดับความพึงพอใจ</h3>
                <div className="rating-scale-list">
                    <div className="rating-scale-item">
                        <div className="stars">
                            <FaStar color="#fbbf24" size={20} />
                            <FaStar color="#fbbf24" size={20} />
                            <FaStar color="#fbbf24" size={20} />
                            <FaStar color="#fbbf24" size={20} />
                            <FaStar color="#fbbf24" size={20} />
                        </div>
                        <span className="rating-scale-text">หมายถึง <strong>มากที่สุด</strong></span>
                    </div>

                    <div className="rating-scale-item">
                        <div className="stars">
                            <FaStar color="#fbbf24" size={20} />
                            <FaStar color="#fbbf24" size={20} />
                            <FaStar color="#fbbf24" size={20} />
                            <FaStar color="#fbbf24" size={20} />
                            <FaStar color="#e5e7eb" size={20} />
                        </div>
                        <span className="rating-scale-text">หมายถึง <strong>มาก</strong></span>
                    </div>

                    <div className="rating-scale-item">
                        <div className="stars">
                            <FaStar color="#fbbf24" size={20} />
                            <FaStar color="#fbbf24" size={20} />
                            <FaStar color="#fbbf24" size={20} />
                            <FaStar color="#e5e7eb" size={20} />
                            <FaStar color="#e5e7eb" size={20} />
                        </div>
                        <span className="rating-scale-text">หมายถึง <strong>ปานกลาง</strong></span>
                    </div>

                    <div className="rating-scale-item">
                        <div className="stars">
                            <FaStar color="#fbbf24" size={20} />
                            <FaStar color="#fbbf24" size={20} />
                            <FaStar color="#e5e7eb" size={20} />
                            <FaStar color="#e5e7eb" size={20} />
                            <FaStar color="#e5e7eb" size={20} />
                        </div>
                        <span className="rating-scale-text">หมายถึง <strong>น้อย</strong></span>
                    </div>

                    <div className="rating-scale-item">
                        <div className="stars">
                            <FaStar color="#fbbf24" size={20} />
                            <FaStar color="#e5e7eb" size={20} />
                            <FaStar color="#e5e7eb" size={20} />
                            <FaStar color="#e5e7eb" size={20} />
                            <FaStar color="#e5e7eb" size={20} />
                        </div>
                        <span className="rating-scale-text">หมายถึง <strong>น้อยที่สุด</strong></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section0_Info;