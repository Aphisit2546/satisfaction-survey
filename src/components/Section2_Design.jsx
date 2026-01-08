import StarRating from './StarRating';
import appScreenshot from '../assets/img/202615171335369.png';

const Section2_Design = ({ ratings, onRatingChange }) => {
    const questions = [
        'รูปแบบหน้าจอของระบบมีความสวยงามและทันสมัย',
        'การจัดวางองค์ประกอบบนหน้าจอมีความเหมาะสม',
        'สีและตัวอักษรของระบบมีความเหมาะสม อ่านง่าย',
        'การออกแบบโดยรวมช่วยให้ใช้งานระบบได้สะดวก'
    ];

    return (
        <div className="section-card">
            <h2 className="section-title">ส่วนที่ 3 : ด้านการออกแบบ (Design Aspect)</h2>

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
                    onRatingChange={(value) => onRatingChange('design', `q${index + 1}`, value)}
                    question={`${index + 1}. ${question}`}
                />
            ))}
        </div>
    );
};

export default Section2_Design;