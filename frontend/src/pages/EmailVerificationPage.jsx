import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EmailVerificationPage = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const { email, role } = location.state || {};

  useEffect(() => {
    if (!email || !role) {
      alert('Missing verification data. Redirecting to signup.');
      navigate('/signup');
    }
  }, [email, role, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/v1/auth/email-verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();

      if (response.status === 200) {
        alert('Email verified successfully!');

        // ✅ Redirect based on role
        if (role === 'patient') {
          navigate('/PatientMainScreen');
        } else if (role === 'doctor') {
          navigate('/doctorsDashboard');
        } else {
          navigate('/login');
        }
      } else {
        alert(data.message || 'Verification failed.');
      }
    } catch (error) {
      console.error('Verification error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 to-blue-300 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Email Verification</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200"
          >
            Verify OTP
          </button>
        </form>
        <p className="text-sm text-gray-500 text-center mt-4">
          Didn't receive the code? <span className="text-blue-600 hover:underline cursor-pointer">Resend</span>
        </p>
      </div>
    </div>
  );
};

export default EmailVerificationPage;
