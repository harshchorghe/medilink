import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('patient');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    address: '',
    speciality: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // TODO: Send formData to backend
    console.log('Signup Data:', role, formData);

    // Redirect to appropriate dashboard
    if (role === 'patient') {
      navigate('/');
    } else {
      navigate('/doctorsdashboard');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

        {/* Role selection */}
        <div className="flex justify-center mb-6 space-x-4">
          <button
            type="button"
            className={`px-4 py-2 rounded border ${
              role === 'patient' ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
            onClick={() => setRole('patient')}
          >
            Patient
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded border ${
              role === 'doctor' ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
            onClick={() => setRole('doctor')}
          >
            Doctor
          </button>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />

          {role === 'patient' ? (
            <>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <textarea
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                rows={3}
                required
              />
            </>
          ) : (
            <input
              type="text"
              name="speciality"
              placeholder="Speciality"
              value={formData.speciality}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          )}

          {/* Password Fields */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
