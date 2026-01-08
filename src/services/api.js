
// services/api.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// ตรวจสอบว่ามี API URL หรือไม่
if (!API_URL) {
  console.error('❌ VITE_API_URL is not defined in .env file');
}

export const submitSurvey = async (formData) => {
  try {
    console.log('🚀 Submitting survey to:', API_URL);
    
    // Transform data to match Google Sheets columns
    const payload = {
      timestamp: new Date().toLocaleString('th-TH', { 
        timeZone: 'Asia/Bangkok',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }),
      
      // Section 1: General Information
      gender: formData.gender === 'อื่นๆ' ? formData.genderOther : formData.gender,
      age: formData.age === 'อื่นๆ' ? formData.ageOther : formData.age,
      department: formData.department,
      
      // Section 2: Design (4 questions)
      design_q1: formData.design.q1,
      design_q2: formData.design.q2,
      design_q3: formData.design.q3,
      design_q4: formData.design.q4,
      
      // Section 3: Quality (4 questions)
      quality_q1: formData.quality.q1,
      quality_q2: formData.quality.q2,
      quality_q3: formData.quality.q3,
      quality_q4: formData.quality.q4,
      
      // Section 4: Usability (4 questions)
      usability_q1: formData.usability.q1,
      usability_q2: formData.usability.q2,
      usability_q3: formData.usability.q3,
      usability_q4: formData.usability.q4,
      
      // Section 5: Usefulness (4 questions)
      usefulness_q1: formData.usefulness.q1,
      usefulness_q2: formData.usefulness.q2,
      usefulness_q3: formData.usefulness.q3,
      usefulness_q4: formData.usefulness.q4,
      
      // Section 6: Feedback
      feedback_liked: formData.feedback.liked || '-',
      feedback_improve: formData.feedback.improve || '-',
      feedback_other: formData.feedback.other || '-'
    };

    console.log('📦 Payload:', payload);

    // ส่งข้อมูลไปยัง Google Apps Script
    const response = await axios.post(API_URL, payload, {
      headers: {
        'Content-Type': 'text/plain', // ใช้ text/plain เพื่อหลีกเลี่ยง CORS preflight
      },
      timeout: 30000 // 30 seconds timeout
    });

    console.log('✅ Response:', response.data);

    // ตรวจสอบ response
    if (response.data && response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data?.message || 'Unknown error');
    }

  } catch (error) {
    console.error('❌ Error submitting survey:', error);
    
    // แสดง error ละเอียดเพิ่มเติม
    if (error.response) {
      // Server responded with error
      console.error('Response error:', error.response.data);
      console.error('Status:', error.response.status);
      throw new Error(`Server error: ${error.response.status}`);
    } else if (error.request) {
      // Request was made but no response
      console.error('No response received:', error.request);
      throw new Error('ไม่สามารถเชื่อมต่อกับ Server ได้ กรุณาตรวจสอบ URL');
    } else {
      // Something else happened
      console.error('Error message:', error.message);
      throw error;
    }
  }
};

// ฟังก์ชันดึงสถิติ - ใช้กับ Google Apps Script ที่สร้างไว้
export const getSurveyResults = async () => {
  try {
    console.log('📊 Fetching survey results from:', API_URL);
    
    // เรียก API ด้วย GET method และ parameter action=getStats
    const response = await axios.get(API_URL, {
      params: {
        action: 'getStats'
      },
      timeout: 30000
    });

    console.log('✅ Stats Response:', response.data);

    if (response.data && response.data.success) {
      return response.data.data; // ส่งคืน data object ที่มี design, quality, usability, usefulness
    } else {
      throw new Error(response.data?.message || 'Failed to fetch statistics');
    }

  } catch (error) {
    console.error('❌ Error fetching survey results:', error);
    
    if (error.response) {
      console.error('Response error:', error.response.data);
      throw new Error(`Server error: ${error.response.status}`);
    } else if (error.request) {
      console.error('No response received:', error.request);
      throw new Error('ไม่สามารถเชื่อมต่อกับ Server ได้');
    } else {
      console.error('Error message:', error.message);
      throw error;
    }
  }
};