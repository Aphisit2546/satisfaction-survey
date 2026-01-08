import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import Section0_Info from './components/Section0_Info';
import Section1_General from './components/Section1_General';
import Section2_Design from './components/Section2_Design';
import Section3_Quality from './components/Section3_Quality';
import Section4_Usability from './components/Section4_Usability';
import Section5_Usefulness from './components/Section5_Usefulness';
import Section6_Feedback from './components/Section6_Feedback';
import NavigationButtons from './components/NavigationButtons';
import SuccessModal from './components/SuccessModal';
import { submitSurvey } from './services/api';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 7; // 0-6

  const [formData, setFormData] = useState({
    gender: '',
    genderOther: '',
    age: '',
    ageOther: '',
    department: '',
    design: { q1: 0, q2: 0, q3: 0, q4: 0 },
    quality: { q1: 0, q2: 0, q3: 0, q4: 0 },
    usability: { q1: 0, q2: 0, q3: 0, q4: 0 },
    usefulness: { q1: 0, q2: 0, q3: 0, q4: 0 },
    feedback: { liked: '', improve: '', other: '' }
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleRatingChange = (section, question, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], [question]: value }
    }));
    if (errors[section]) {
      setErrors(prev => ({ ...prev, [section]: '' }));
    }
  };

  const handleFeedbackChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      feedback: { ...prev.feedback, [field]: value }
    }));
  };

  // Validate current step
  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1: // Section 1: General Info
        if (!formData.gender) newErrors.gender = 'กรุณาเลือกเพศ';
        if (formData.gender === 'อื่นๆ' && !formData.genderOther) {
          newErrors.genderOther = 'กรุณาระบุเพศ';
        }
        if (!formData.age) newErrors.age = 'กรุณาเลือกอายุ';
        if (formData.age === 'อื่นๆ' && !formData.ageOther) {
          newErrors.ageOther = 'กรุณาระบุอายุ';
        }
        if (!formData.department) newErrors.department = 'กรุณาเลือกฝ่าย';
        break;

      case 2: // Section 2: Design
        const hasUnratedDesign = Object.values(formData.design).some(r => r === 0);
        if (hasUnratedDesign) newErrors.design = 'กรุณาให้คะแนนทุกข้อ';
        break;

      case 3: // Section 3: Quality
        const hasUnratedQuality = Object.values(formData.quality).some(r => r === 0);
        if (hasUnratedQuality) newErrors.quality = 'กรุณาให้คะแนนทุกข้อ';
        break;

      case 4: // Section 4: Usability
        const hasUnratedUsability = Object.values(formData.usability).some(r => r === 0);
        if (hasUnratedUsability) newErrors.usability = 'กรุณาให้คะแนนทุกข้อ';
        break;

      case 5: // Section 5: Usefulness
        const hasUnratedUsefulness = Object.values(formData.usefulness).some(r => r === 0);
        if (hasUnratedUsefulness) newErrors.usefulness = 'กรุณาให้คะแนนทุกข้อ';
        break;

      case 6: // Section 6: Feedback (optional)
        // No validation needed
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 0) {
      // Step 0 (Info) - no validation needed
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep(currentStep)) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }

    setIsSubmitting(true);

    try {
      await submitSurvey(formData);
      setShowSuccess(true);

      // Reset form and go back to step 0
      setFormData({
        gender: '',
        genderOther: '',
        age: '',
        ageOther: '',
        department: '',
        design: { q1: 0, q2: 0, q3: 0, q4: 0 },
        quality: { q1: 0, q2: 0, q3: 0, q4: 0 },
        usability: { q1: 0, q2: 0, q3: 0, q4: 0 },
        usefulness: { q1: 0, q2: 0, q3: 0, q4: 0 },
        feedback: { liked: '', improve: '', other: '' }
      });
      setCurrentStep(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      alert('เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง');
      console.error('Submit error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render current step
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Section0_Info />;
      case 1:
        return (
          <>
            <Section1_General formData={formData} onChange={handleChange} />
            {errors.gender && <p className="error-message">{errors.gender}</p>}
            {errors.genderOther && <p className="error-message">{errors.genderOther}</p>}
            {errors.age && <p className="error-message">{errors.age}</p>}
            {errors.ageOther && <p className="error-message">{errors.ageOther}</p>}
            {errors.department && <p className="error-message">{errors.department}</p>}
          </>
        );
      case 2:
        return (
          <>
            <Section2_Design ratings={formData.design} onRatingChange={handleRatingChange} />
            {errors.design && <p className="error-message">{errors.design}</p>}
          </>
        );
      case 3:
        return (
          <>
            <Section3_Quality ratings={formData.quality} onRatingChange={handleRatingChange} />
            {errors.quality && <p className="error-message">{errors.quality}</p>}
          </>
        );
      case 4:
        return (
          <>
            <Section4_Usability ratings={formData.usability} onRatingChange={handleRatingChange} />
            {errors.usability && <p className="error-message">{errors.usability}</p>}
          </>
        );
      case 5:
        return (
          <>
            <Section5_Usefulness ratings={formData.usefulness} onRatingChange={handleRatingChange} />
            {errors.usefulness && <p className="error-message">{errors.usefulness}</p>}
          </>
        );
      case 6:
        return <Section6_Feedback feedback={formData.feedback} onChange={handleFeedbackChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <Header />

      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

      <form onSubmit={handleSubmit} className="survey-form">
        {renderStep()}

        <NavigationButtons
          key={currentStep}
          currentStep={currentStep}
          totalSteps={totalSteps}
          onNext={handleNext}
          onPrev={handlePrev}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </form>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </div>
  );
}

export default App;