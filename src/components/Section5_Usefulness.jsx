import StarRating from './StarRating';
import appScreenshot from '../assets/img/202615171335369.png';

const Section5_Usefulness = ({ ratings, onRatingChange }) => {
    const questions = [
        'ระบบช่วยเพิ่มประสิทธิภาพในการทำงาน',
        'ระบบช่วยลดความผิดพลาดในการทำงาน',
        'ระบบสามารถตอบสนองต่อความต้องการของผู้ใช้งานได้ดี',
        'ผู้ใช้มีความพึงพอใจในการนำระบบไปใช้งานจริง'
    ];

    return (
        <div className="section-card">
            <h2 className="section-title">ส่วนที่ 6 : ด้านประโยชน์ที่ได้รับ (Usefulness)</h2>

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
                    onRatingChange={(value) => onRatingChange('usefulness', `q${index + 1}`, value)}
                    question={`${index + 1}. ${question}`}
                />
            ))}
        </div>
    );
};

export default Section5_Usefulness;