import { FaCheckCircle } from 'react-icons/fa';

const SuccessModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <FaCheckCircle className="success-icon" />
                <h2 className="modal-title">ส่งแบบประเมินสำเร็จ!</h2>
                <p className="modal-text">
                    ขอบคุณสำหรับการให้ข้อมูลและความคิดเห็น
                </p>
                <p className="modal-text">
                    ข้อมูลของคุณจะถูกนำไปวิเคราะห์เพื่อปรับปรุงระบบต่อไป
                </p>
                <button className="modal-button" onClick={onClose}>
                    ปิด
                </button>
            </div>
        </div>
    );
};

export default SuccessModal;