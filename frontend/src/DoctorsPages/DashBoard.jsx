import React, { useEffect, useMemo, useState } from 'react';
import { FaUserMd, FaCalendarAlt, FaUser } from 'react-icons/fa';
import { FiGrid, FiList, FiPlusCircle } from 'react-icons/fi';
import { MdDashboard } from 'react-icons/md';

const formatDateTime = (epochMs) => {
  try {
    const d = new Date(Number(epochMs));
    return d.toLocaleString();
  } catch (_) {
    return '';
  }
};

const DashBoard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const token = useMemo(() => localStorage.getItem('token') || '', []);

  useEffect(() => {
    const controller = new AbortController();
    const fetchAppointments = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch('http://localhost:5000/v1/appointments/doctor', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            ...(token
              ? { 'Authorization': `Bearer ${token}` }
              : { 'x-dev-user-email': localStorage.getItem('email') || 'doctor@example.com', 'x-dev-user-role': 'doctor' }
            )
          },
          signal: controller.signal
        });
        const json = await res.json();
        if (!res.ok) {
          throw new Error(json?.error || json?.message || 'Failed to fetch appointments');
        }
        setAppointments(Array.isArray(json.data) ? json.data : []);
      } catch (e) {
        if (e.name !== 'AbortError') {
          setError(e.message || 'Something went wrong');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
    return () => controller.abort();
  }, [token]);

  const updateStatus = async (appointmentId, status) => {
    try {
      const res = await fetch(`http://localhost:5000/v1/appointments/${appointmentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json?.error || json?.message || 'Failed to update');
      }
      setAppointments(prev => prev.map(a => a._id === appointmentId ? json.data : a));
    } catch (e) {
      alert(e.message || 'Update failed');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r shadow-sm">
        <div className="px-6 py-4 text-lg font-bold">APADOC</div>
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
              <h3 className="text-xl font-bold">-</h3>
            </div>
            <FaUserMd className="text-blue-500 text-2xl" />
          </div>
          <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Appointments</p>
              <h3 className="text-xl font-bold">{appointments.length}</h3>
            </div>
            <FaCalendarAlt className="text-purple-500 text-2xl" />
          </div>
          <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Patients</p>
              <h3 className="text-xl font-bold">-</h3>
            </div>
            <FaUser className="text-green-500 text-2xl" />
          </div>
        </div>

        {/* Latest Appointments */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h4 className="font-semibold text-md border-b pb-2 mb-4 flex items-center gap-2">
            📋 Latest Appointments
          </h4>
          {loading && (
            <div className="text-sm text-gray-500">Loading appointments...</div>
          )}
          {!loading && error && (
            <div className="text-sm text-red-500">{error}</div>
          )}
          {!loading && !error && (
            <ul className="space-y-4">
              {appointments.map((appt) => (
                <li key={appt._id} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={appt?.patientId?.avatar || 'https://i.pravatar.cc/100'}
                      alt={appt?.patientId?.name || appt?.patientId?.email || 'Patient'}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{appt?.patientId?.name || appt?.patientId?.email || 'Patient'}</p>
                      <p className="text-sm text-gray-500">{formatDateTime(appt.dateTime)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">{appt.status}</span>
                    <button
                      onClick={() => updateStatus(appt._id, 'confirmed')}
                      className="text-green-600 bg-green-100 px-2 py-1 rounded-full hover:bg-green-200"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => updateStatus(appt._id, 'completed')}
                      className="text-blue-600 bg-blue-100 px-2 py-1 rounded-full hover:bg-blue-200"
                    >
                      Complete
                    </button>
                    <button
                      onClick={() => updateStatus(appt._id, 'cancelled')}
                      className="text-red-500 bg-red-100 px-2 py-1 rounded-full hover:bg-red-200"
                    >
                      Cancel
                    </button>
                  </div>
                </li>
              ))}
              {appointments.length === 0 && (
                <li className="text-sm text-gray-500">No appointments found.</li>
              )}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default DashBoard;
