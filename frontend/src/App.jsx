import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MyAppointments from './pages/MyAppointments';
import NavBar from './Components/NavBar';
import Home from './pages/Home';
import Doctors from './pages/doctors';
import Login from './pages/login';
import About from './pages/about';
import MyProfile from './pages/MyProfile';
import Contact from './pages/Contact';
import Appointment from './pages/appointment';
// import Appointment from './pages/Appointment'; // Uncomment if used


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <NavBar />

      {/* ✅ Enable dynamic routing */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/MyProfile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
       
      </Routes>
    </div>
  );
};

export default App;
