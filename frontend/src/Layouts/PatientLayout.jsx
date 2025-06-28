import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar'; // Reuse if needed

const PatientLayout = () => {
  return (
    <>
      <div className="mx-4 sm:mx-[10%]">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
};

export default  PatientLayout;
