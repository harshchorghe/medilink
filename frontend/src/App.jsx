import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Import the AuthContext

import NavBar from './Components/NavBar';
import Home from './pages/home';
import Doctors from './pages/doctors';
import Login from './pages/login';
import Signup from './pages/signup';
import About from './pages/about';
import MyProfile from './pages/myProfile';
import Contact from './pages/Contact';
import MyAppointments from './pages/MyAppointments';
import Appointment from './pages/appointment';

const App = () => {
  return (
    <AuthProvider>
      <div className="mx-4 sm:mx-[10%]">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:speciality" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/appointments" element={<MyAppointments />} />
          <Route path="/appointment/:docId" element={<Appointment />} />
          {/* <Route path="/doctorsdashboard" element={<DoctorsDashboard />} /> */}
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
