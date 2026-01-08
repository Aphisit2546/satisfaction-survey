import appScreenshot from '../assets/img/202615171335369.png';

const Section1_General = ({ formData, onChange }) => {
    const genderOptions = ['ชาย', 'หญิง', 'อื่นๆ'];
    const ageOptions = ['18–25', '26–30', '31–35', '36–40', '41–45', 'มากกว่า 45', 'อื่นๆ'];
    const departments = [
        'Administration Department (ฝ่ายธุรการและสนับสนุนองค์กร)',
        'Account & Finance Department (ฝ่ายบัญชีและการเงิน)',
        'Human Resource Department (ฝ่ายทรัพยากรบุคคล)',
        'Sales & Marketing Department (ฝ่ายขายและการตลาด)',
        'Software Development Department (ฝ่ายพัฒนาซอฟต์แวร์)',
        'Research & Development (R&D) Department (ฝ่ายวิจัยและพัฒนา)',
        'Project Department (ฝ่ายโครงการ)'
    ];

    return (
        <div className="section-card">
            <h2 className="section-title">ส่วนที่ 2 : ข้อมูลทั่วไป</h2>

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


            {/* เพศ */}
            <div className="form-group">
                <label className="form-label">
                    เพศ <span className="required">*</span>
                </label>
                <div className="radio-group">
                    {genderOptions.map((option) => (
                        <label key={option} className="radio-label">
                            <input
                                type="radio"
                                name="gender"
                                value={option}
                                checked={formData.gender === option}
                                onChange={(e) => onChange('gender', e.target.value)}
                                className="radio-input"
                            />
                            <span>{option}</span>
                        </label>
                    ))}
                </div>
                {formData.gender === 'อื่นๆ' && (
                    <input
                        type="text"
                        placeholder="กรุณาระบุ"
                        value={formData.genderOther}
                        onChange={(e) => onChange('genderOther', e.target.value)}
                        className="text-input"
                    />
                )}
            </div>

            {/* อายุ */}
            <div className="form-group">
                <label className="form-label">
                    อายุ <span className="required">*</span>
                </label>
                <div className="radio-group">
                    {ageOptions.map((option) => (
                        <label key={option} className="radio-label">
                            <input
                                type="radio"
                                name="age"
                                value={option}
                                checked={formData.age === option}
                                onChange={(e) => onChange('age', e.target.value)}
                                className="radio-input"
                            />
                            <span>{option}</span>
                        </label>
                    ))}
                </div>
                {formData.age === 'อื่นๆ' && (
                    <input
                        type="text"
                        placeholder="กรุณาระบุ"
                        value={formData.ageOther}
                        onChange={(e) => onChange('ageOther', e.target.value)}
                        className="text-input"
                    />
                )}
            </div>

            {/* ตำแหน่ง/ฝ่าย */}
            <div className="form-group">
                <label className="form-label">
                    ตำแหน่ง/ฝ่าย <span className="required">*</span>
                </label>
                <select
                    value={formData.department}
                    onChange={(e) => onChange('department', e.target.value)}
                    className="select-input"
                >
                    <option value="">-- เลือกฝ่าย --</option>
                    {departments.map((dept) => (
                        <option key={dept} value={dept}>
                            {dept}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Section1_General;