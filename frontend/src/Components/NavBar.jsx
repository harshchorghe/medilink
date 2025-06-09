import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [profileDropdown, setProfileDropdown] = useState(false);
  
  const toggleDropdown = () => {
    setProfileDropdown(!profileDropdown);
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 px-4 relative">
      {/* Logo */}
      <img className="w-44 cursor-pointer" src={assets.logo} alt="Logo" />

      {/* Navigation links */}
      <ul className="flex space-x-6 font-medium text-gray-700">
        <NavLink exact to="/" activeClassName="text-blue-600">
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

      {/* Profile Image or Create Account Button */}
      <div className="relative">
        {isLoggedIn ? (
          <>
            <img
              src={assets.upload_area}
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
                    setIsLoggedIn(false); // Simulate logout (replace with real logic)
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </>
        ) : (
          <NavLink to="/signup">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Create Account
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;
