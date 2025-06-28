import React from 'react';
import { FaUserMd, FaCalendarAlt, FaUser } from 'react-icons/fa';
import { FiGrid, FiList, FiPlusCircle } from 'react-icons/fi';
import { MdDashboard } from 'react-icons/md';

const appointments = [
  {
    name: "Dr. Richard James",
    date: "Booking on 24th July, 2024",
    img: "https://randomuser.me/api/portraits/men/32.jpg", // Placeholder avatar
  },
  {
    name: "Dr. Richard James",
    date: "Booking on 24th July, 2024",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr. Richard James",
    date: "Booking on 24th July, 2024",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr. Richard James",
    date: "Booking on 24th July, 2024",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr. Richard James",
    date: "Booking on 24th July, 2024",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const DashBoard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r shadow-sm">
        <div className="px-6 py-4 text-lg font-bold">MediLink</div>
        <nav className="flex flex-col gap-4 px-4 py-2">
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-100 text-blue-600 font-medium">
            <MdDashboard /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg">
            <FaCalendarAlt /> Appointments
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg">
            <FiPlusCircle /> Add Doctor
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg">
            <FiList /> Doctors List
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        {/* Dashboard cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Doctors</p>
              <h3 className="text-xl font-bold">14</h3>
            </div>
            <FaUserMd className="text-blue-500 text-2xl" />
          </div>
          <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Appointments</p>
              <h3 className="text-xl font-bold">2</h3>
            </div>
            <FaCalendarAlt className="text-purple-500 text-2xl" />
          </div>
          <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Patients</p>
              <h3 className="text-xl font-bold">5</h3>
            </div>
            <FaUser className="text-green-500 text-2xl" />
          </div>
        </div>

        {/* Latest Appointments */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h4 className="font-semibold text-md border-b pb-2 mb-4 flex items-center gap-2">
            📋 Latest Appointment
          </h4>
          <ul className="space-y-4">
            {appointments.map((appt, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={appt.img}
                    alt={appt.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{appt.name}</p>
                    <p className="text-sm text-gray-500">{appt.date}</p>
                  </div>
                </div>
                <button className="text-red-400 bg-red-100 px-2 py-1 rounded-full hover:bg-red-200">
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default DashBoard;
