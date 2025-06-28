import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';

const LandingLayout = () => {
  return (
    <>
      <div className="">
        
        <Outlet />
      </div>
    </>
  );
};

export default LandingLayout;
