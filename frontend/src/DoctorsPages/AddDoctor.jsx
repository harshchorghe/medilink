import React from 'react';
import { MdDashboard, MdEvent, MdPersonAdd, MdPeople } from 'react-icons/md'; // Assuming you installed react-icons
import { HiOutlineX } from 'react-icons/hi'; // For the 'X' button

const dummyAppointments = [
  {
    id: 1,
    patientName: 'Richard James',
    patientAge: 28,
    dateTime: '24th July, 2024, 10:AM',
    patientAvatar: 'https://i.pravatar.cc/300?img=68' // Random avatar for demo
  },
  {
    id: 2,
    patientName: 'Richard James',
    patientAge: 28,
    dateTime: '24th July, 2024, 10:AM',
    patientAvatar: 'https://i.pravatar.cc/300?img=25' // Random avatar for demo
  },
  // Add more dummy data if needed
  {
    id: 3,
    patientName: 'Jane Doe',
    patientAge: 35,
    dateTime: '25th July, 2024, 11:30 AM',
    patientAvatar: 'https://i.pravatar.cc/300?img=33'
  },
  {
    id: 4,
    patientName: 'John Smith',
    patientAge: 42,
    dateTime: '25th July, 2024, 02:00 PM',
    patientAvatar: 'https://i.pravatar.cc/300?img=12'
  },
];

const DoctorDashboard = () => {
  const handleCancelAppointment = (id) => {
    console.log(`Cancelling appointment with ID: ${id}`);
    // In a real application, you'd make an API call here to cancel the appointment
    // and then update the state to remove the appointment from the list.
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center text-purple-700">
          <span className="text-2xl font-bold">Prescripto</span>{' '}
          <span className="ml-2 px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">Admin</span>
        </div>
        <button className="bg-purple-700 text-white px-5 py-2 rounded-md hover:bg-purple-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
          Login
        </button>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar Navigation */}
        <nav className="w-64 bg-white p-5 shadow-md border-r border-gray-200">
          <ul className="space-y-2">
            <li className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer transition-colors duration-150">
              <MdDashboard className="mr-3 text-xl" />
              Dashboard
            </li>
            <li className="flex items-center p-3 bg-purple-50 text-purple-700 font-semibold rounded-md border-l-4 border-purple-700 cursor-pointer transition-colors duration-150">
              <MdEvent className="mr-3 text-xl" />
              Appointments
            </li>
            <li className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer transition-colors duration-150">
              <MdPersonAdd className="mr-3 text-xl" />
              Add Doctor
            </li>
            <li className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer transition-colors duration-150">
              <MdPeople className="mr-3 text-xl" />
              Doctors List
            </li>
          </ul>
        </nav>

        {/* Appointments Section */}
        <main className="flex-1 p-8">
          <h2 className="text-3xl text-gray-800 font-semibold mb-6">All Appointments</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Age
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th scope="col" className="relative px-6 py-4">
                    <span className="sr-only">Cancel</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dummyAppointments.map((appointment, index) => (
                  <tr key={appointment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full object-cover" src={appointment.patientAvatar} alt={`${appointment.patientName} avatar`} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {appointment.patientName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {appointment.patientAge}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {appointment.dateTime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleCancelAppointment(appointment.id)}
                        className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                        title="Cancel Appointment"
                      >
                        <HiOutlineX className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DoctorDashboard;