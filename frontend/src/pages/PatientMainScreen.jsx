// import React from 'react';
// import { FaArrowRight } from 'react-icons/fa';

// const MainScreen = () => {
//   return (
//     <div className="font-sans min-h-screen bg-gray-50 text-gray-800">
//       {/* Navbar */}
//       <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
//         <div className="flex items-center space-x-2">
//           <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">M</div>
//           <div className="flex flex-col leading-tight">
//             <span className="font-semibold text-lg">MedLink</span>
//             <span className="text-xs text-gray-500 -mt-1">Healthcare Solutions</span>
//           </div>
//         </div>

//         <ul className="hidden md:flex space-x-6 font-medium text-sm">
//           <li><a href="#home" className="hover:text-blue-600">Home</a></li>
//           <li><a href="#services" className="hover:text-blue-600">Services</a></li>
//           <li><a href="#about" className="hover:text-blue-600">About</a></li>
//           <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
//         </ul>

//         <div className="flex items-center space-x-4">
//           <button className="text-sm text-gray-700 hover:text-blue-600">Login</button>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full flex items-center space-x-1">
//             <span>Get Started</span>
//             <FaArrowRight size={12} />
//           </button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="text-center mt-20 px-4">
//         <p className="text-sm text-gray-500">🌟 Trusted by 10,000+ patients worldwide</p>
//         <h1 className="text-4xl md:text-5xl font-bold mt-4">
//           Your Health, <span className="text-blue-600">Reimagined.</span>
//         </h1>
//         <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-base md:text-lg">
//           Experience the future of healthcare with AI-powered scheduling, intelligent medical records,
//           and seamless doctor-patient connections. Your wellness journey starts here.
//         </p>

//         <div className="flex justify-center gap-4 mt-10 flex-wrap">
//           <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center space-x-2">
//             <span>Start Your Journey</span>
//             <FaArrowRight size={14} />
//           </button>
//           <button className="border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-full text-gray-700">
//             I'm a Doctor
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MainScreen;


import React from 'react'
import { Link } from 'react-router-dom'
import { assets, specialityData } from '../assets/assets'

const PatientMainScreen = () => {
  return (
    <div className="py-8">
      {/* Hero Section */}
      <div className="bg-blue-50 py-15 px-4 md:px-20 rounded-xl mb-16 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Your Health, Our Priority</h1>
          <p className="text-gray-600 mb-6">
            Find and book appointments with the best doctors in your area. 
            Get the care you deserve with Apadoc.
          </p>
          <Link to="/doctors">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md">
              Find Doctors
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <img src={assets.header_img} alt="Healthcare" className="w-full rounded-lg" />
        </div>
      </div>
      
      {/* Specialities Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Specialities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {specialityData.map((item, index) => (
            <Link to={`/doctors?speciality=${encodeURIComponent(item.speciality)}`} key={index}>
              <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <img src={item.image} alt={item.speciality} className="w-16 h-16 mx-auto mb-3" />
                <h3 className="font-medium">{item.speciality}</h3>
              </div>
            </Link>
    ))}
  </div>
</div>

      
      {/* How It Works Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-500 text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Find a Doctor</h3>
            <p className="text-gray-600">Browse through our list of qualified doctors by specialty or location.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-500 text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Book Appointment</h3>
            <p className="text-gray-600">Select a convenient time slot and book your appointment online.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-500 text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Care</h3>
            <p className="text-gray-600">Visit the doctor at the scheduled time and receive quality healthcare.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientMainScreen