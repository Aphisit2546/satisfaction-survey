const ProgressBar = ({ currentStep, totalSteps }) => {
    const steps = [
        { number: 0, title: 'ข้อมูลระบบ' },
        { number: 1, title: 'ข้อมูลทั่วไป' },
        { number: 2, title: 'ด้านการออกแบบ' },
        { number: 3, title: 'ด้านคุณภาพ' },
        { number: 4, title: 'ด้านการใช้งาน' },
        { number: 5, title: 'ด้านประโยชน์' },
        { number: 6, title: 'ข้อเสนอแนะ' }
    ];

    const progress = ((currentStep) / (totalSteps - 1)) * 100;

    return (
        <div className="progress-container">
            {/* Progress Bar */}
            <div className="progress-bar-wrapper">
                <div className="progress-bar-bg">
                    <div
                        className="progress-bar-fill"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Step Indicators */}
            <div className="step-indicators">
                {steps.map((step) => (
                    <div
                        key={step.number}
                        className={`step-indicator ${step.number === currentStep ? 'active' : ''
                            } ${step.number < currentStep ? 'completed' : ''}`}
                    >
                        <div className="step-circle">
                            {step.number < currentStep ? '✓' : step.number + 1}
                        </div>
                        <div className="step-label">{step.title}</div>
                    </div>
                ))}
            </div>

            {/* Current Step Info */}
            <div className="current-step-info">
                <span className="step-counter">
                    ขั้นตอนที่ {currentStep + 1} จาก {totalSteps}
                </span>
            </div>
        </div>
    );
};

export default ProgressBar;