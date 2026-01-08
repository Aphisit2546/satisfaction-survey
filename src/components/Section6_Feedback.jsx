import appScreenshot from '../assets/img/202615171335369.png';

const Section6_Feedback = ({ feedback, onChange }) => {
    return (
        <div className="section-card">
            <h2 className="section-title">ส่วนที่ 7 : ข้อเสนอแนะเพิ่มเติม</h2>
            <p className="section-subtitle">(ไม่บังคับ)</p>

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

            <div className="form-group">
                <label className="form-label">
                    สิ่งที่ผู้ใช้ชอบมากที่สุดในระบบคืออะไร? (ถ้ามี)
                </label>
                <textarea
                    value={feedback.liked}
                    onChange={(e) => onChange('feedback', 'liked', e.target.value)}
                    className="textarea-input"
                    rows="4"
                    placeholder="กรุณากรอกข้อความ..."
                />
            </div>

            <div className="form-group">
                <label className="form-label">
                    สิ่งที่ต้องการให้พัฒนาเพิ่มเติมหรือแก้ไขคืออะไร? (ถ้ามี)
                </label>
                <textarea
                    value={feedback.improve}
                    onChange={(e) => onChange('feedback', 'improve', e.target.value)}
                    className="textarea-input"
                    rows="4"
                    placeholder="กรุณากรอกข้อความ..."
                />
            </div>

            <div className="form-group">
                <label className="form-label">
                    ข้อคิดเห็นอื่น ๆ (ถ้ามี)
                </label>
                <textarea
                    value={feedback.other}
                    onChange={(e) => onChange('feedback', 'other', e.target.value)}
                    className="textarea-input"
                    rows="4"
                    placeholder="กรุณากรอกข้อความ..."
                />
            </div>
        </div>
    );
};

export default Section6_Feedback;