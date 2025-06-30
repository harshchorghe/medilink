import React from 'react';
import { Outlet } from 'react-router-dom';

const DoctorsLayout = () => {
  return (
    <>
      <div className="mx-4 sm:mx-[10%]">
        
        <Outlet />
      </div>
    </>
  );
};

export default DoctorsLayout;
