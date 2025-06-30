import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Layouts
import LandingLayout from './Layouts/LandingLayout';
import PatientLayout from './Layouts/PatientLayout';

// Public Pages
import Home from './pages/home';
import Login from './pages/Login';
import Signup from './pages/signup';
import About from './pages/about';
import Contact from './pages/Contact';

// App Pages
import MyProfile from './pages/myProfile';
import MyAppointments from './pages/MyAppointments';
import Appointment from './pages/appointment';
import Doctors from './pages/doctors';
import PatientMainScreen from './pages/PatientMainScreen';
import DashBoard from './DoctorsPages/DashBoard';
import EmailVerificationPage from './pages/EmailVerificationPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: 'email-verification', element: <EmailVerificationPage /> },
    ]
  },
  {
    path: '/',
    element: <PatientLayout />,
    children: [
      { path: 'PatientMainScreen', element: <PatientMainScreen /> },
      { path: 'doctors', element: <Doctors /> },
      { path: 'doctors/:speciality', element: <Doctors /> },
      { path: 'MyProfile', element: <MyProfile /> },
       { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'appointments', element: <MyAppointments /> },
      { path: 'appointment/:docId', element: <Appointment /> },
    ]
  },
  {
    path: '/',
    element: <PatientLayout />,
    children: [
      { path: 'doctorsDashboard', element: <DashBoard /> },
    ]
  }
]);

const App = () => {
  return (
    
      <RouterProvider router={router} />
    
  );
};

export default App;
