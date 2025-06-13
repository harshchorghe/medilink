import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const MainScreen = () => {
  return (
    <div className="font-sans min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">M</div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-lg">MedLink</span>
            <span className="text-xs text-gray-500 -mt-1">Healthcare Solutions</span>
          </div>
        </div>

        <ul className="hidden md:flex space-x-6 font-medium text-sm">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#services" className="hover:text-blue-600">Services</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        <div className="flex items-center space-x-4">
          <button className="text-sm text-gray-700 hover:text-blue-600">Login</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full flex items-center space-x-1">
            <span>Get Started</span>
            <FaArrowRight size={12} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center mt-20 px-4">
        <p className="text-sm text-gray-500">🌟 Trusted by 10,000+ patients worldwide</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          Your Health, <span className="text-blue-600">Reimagined.</span>
        </h1>
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-base md:text-lg">
          Experience the future of healthcare with AI-powered scheduling, intelligent medical records,
          and seamless doctor-patient connections. Your wellness journey starts here.
        </p>

        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center space-x-2">
            <span>Start Your Journey</span>
            <FaArrowRight size={14} />
          </button>
          <button className="border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-full text-gray-700">
            I'm a Doctor
          </button>
        </div>
      </section>
    </div>
  );
};

export default MainScreen;
