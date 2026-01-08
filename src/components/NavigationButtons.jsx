import { FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const NavigationButtons = ({
    currentStep,
    totalSteps,
    onNext,
    onPrev,
    onSubmit,
    isSubmitting
}) => {
    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === totalSteps - 1;
    const [canSubmit, setCanSubmit] = useState(!isLastStep);

    useEffect(() => {
        if (isLastStep) {
            setCanSubmit(false);
            const timer = setTimeout(() => {
                setCanSubmit(true);
            }, 1000); // 1 second safety delay
            return () => clearTimeout(timer);
        } else {
            setCanSubmit(true);
        }
    }, [isLastStep]);

    return (
        <div className="navigation-buttons">
            {/* Previous Button */}
            {!isFirstStep && (
                <button
                    type="button"
                    onClick={onPrev}
                    className="nav-button prev-button"
                >
                    <FaArrowLeft className="nav-icon" />
                    <span>ย้อนกลับ</span>
                </button>
            )}

            {/* Next/Submit Button */}
            {!isLastStep ? (
                <button
                    type="button"
                    onClick={onNext}
                    className="nav-button next-button"
                >
                    <span>ถัดไป</span>
                    <FaArrowRight className="nav-icon" />
                </button>
            ) : (
                <button
                    type="submit"
                    onClick={onSubmit}
                    className="nav-button submit-button-nav"
                    disabled={isSubmitting || !canSubmit}
                    style={{ opacity: canSubmit ? 1 : 0.7, cursor: canSubmit ? 'pointer' : 'wait' }}
                >
                    <FaCheckCircle className="nav-icon" />
                    <span>{isSubmitting ? 'กำลังส่ง...' : (canSubmit ? 'ส่งแบบประเมิน' : 'กรุณารอสักครู่...')}</span>
                </button>
            )}
        </div>
    );
};

export default NavigationButtons;