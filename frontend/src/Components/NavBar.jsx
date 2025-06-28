import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [profileDropdown, setProfileDropdown] = useState(false);

  const toggleDropdown = () => {
    setProfileDropdown(!profileDropdown);
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 px-4 relative">
      {/* App Title instead of Logo */}
      <h1 className="text-4xl font-bold text-blue-600 cursor-pointer">APADOC</h1>

      {/* Navigation links */}
      <ul className="flex space-x-6 font-medium text-gray-700">
        <NavLink to="/patient-dashboard" activeClassName="text-blue-600">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
        </NavLink>
        <NavLink to="/doctors" activeClassName="text-blue-600">
          <li className="hover:text-blue-500 cursor-pointer">All Doctors</li>
        </NavLink>
        <NavLink to="/about" activeClassName="text-blue-600">
          <li className="hover:text-blue-500 cursor-pointer">About</li>
        </NavLink>
        <NavLink to="/contact" activeClassName="text-blue-600">
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </NavLink>
      </ul>

      {/* Right side: Create Account + Profile */}
      <div className="flex items-center space-x-4">
        {/* Create Account Button */}
        

        {/* Profile Image & Dropdown */}
        <div className="relative">
          <img
            src="/path/to/profile.png" // replace with your profile image
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300"
            onClick={toggleDropdown}
          />
          {profileDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md py-2 z-50">
              <NavLink
                to="/myprofile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setProfileDropdown(false)}
              >
                My Profile
              </NavLink>
              <NavLink
                to="/appointments"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setProfileDropdown(false)}
              >
                My Appointments
              </NavLink>
              <button
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setProfileDropdown(false);
                  // TODO: Add logout logic here
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
