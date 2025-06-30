import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // Assuming role is needed for login

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/v1/auth/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Add 'Authorization' header if needed
        },
        body: JSON.stringify({ email, password }) // Add role if required
      });

      const data = await response.json();

      if (response.ok) {
        const { accessToken, role } = data.data;

        // Save token in localStorage
        localStorage.setItem('token', accessToken);
        localStorage.setItem('role', role);
        localStorage.setItem('email', data.data.email);

        setIsLoggedIn(true);
        alert('Login successful!');
        
        // Redirect based on role
        if (role === 'admin') {
          navigate('/PatientMainScreen');
        } else if (role === 'doctor') {
          navigate('/doctorsDashboard');
        } else {
          navigate('/signup');
        }

      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="p-6 bg-white shadow-lg rounded-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="role"
            placeholder="Role (patient/doctor/admin)"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don’t have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
