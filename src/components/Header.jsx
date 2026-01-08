const Header = () => {
    return (
        <div className="header-section">
            <h1 className="main-title">แบบประเมินความพึงพอใจของผู้ใช้งาน</h1>
            <div className="instruction-box">
                <h2 className="instruction-title">คำชี้แจง</h2>
                <p className="instruction-text">
                    แบบประเมินนี้จัดทำขึ้นเพื่อประเมินและวิเคราะห์ความพึงพอใจของผู้ใช้งานต่อระบบ
                </p>
                <p className="instruction-text">
                    ข้อมูลทั้งหมดจะใช้เพื่อวัตถุประสงค์ทางการศึกษาเท่านั้น
                </p>
            </div>
        </div>
    );
};

export default Header;