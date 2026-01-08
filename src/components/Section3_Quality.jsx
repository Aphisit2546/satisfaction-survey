import StarRating from './StarRating';
import appScreenshot from '../assets/img/202615171335369.png';

const Section3_Quality = ({ ratings, onRatingChange }) => {
    const questions = [
        'ระบบทำงานได้ถูกต้องตามที่ออกแบบไว้',
        'ระบบมีความรวดเร็วในการประมวลผล',
        'ระบบมีความเสถียรและไม่เกิดข้อผิดพลาด',
        'ระบบสามารถใช้งานได้อย่างต่อเนื่อง'
    ];

    return (
        <div className="section-card">
            <h2 className="section-title">ส่วนที่ 4 : ด้านคุณภาพระบบ (System Quality)</h2>

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
                    onRatingChange={(value) => onRatingChange('quality', `q${index + 1}`, value)}
                    question={`${index + 1}. ${question}`}
                />
            ))}
        </div>
    );
};

export default Section3_Quality;