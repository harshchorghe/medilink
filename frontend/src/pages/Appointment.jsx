import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Appointment = () => {
  // Getting the doctor ID from URL params
  const { id } = useParams();

  // Getting state passed through navigation (if available)
  const location = useLocation();
  const locationDoctor = location.state;

  // State variables
  const [doctor, setDoctor] = useState(null);            // Stores selected doctor's details
  const [selectedDay, setSelectedDay] = useState('');    // Stores selected day
  const [selectedTime, setSelectedTime] = useState('');  // Stores selected time slot

  // Options for appointment selection
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const timeSlots = ['10:00AM', '11:00AM', '12:00PM', '01:00PM', '02:00PM'];

  // Load doctor info from navigation state or localStorage
  useEffect(() => {
    if (locationDoctor) {
      // If doctor data was passed during navigation
      setDoctor(locationDoctor);
      localStorage.setItem('selectedDoctor', JSON.stringify(locationDoctor)); // Save to localStorage
    } else {
      // Fallback: Load doctor from localStorage
      const stored = JSON.parse(localStorage.getItem('selectedDoctor'));
      if (stored) setDoctor(stored);
    }
  }, [locationDoctor]);

  // Booking logic
  const handleBookAppointment = () => {
    // Validation: Day and Time must be selected
    if (!selectedDay || !selectedTime) {
      toast.error('Please select both day and time slot');
      return;
    }

    // Creating appointment object
    const appointment = {
      doctorId: id,
      doctorName: doctor.name,
      speciality: doctor.speciality,
      image: doctor.image,
      day: selectedDay,
      time: selectedTime,
      bookedAt: new Date().toLocaleString(), // Stores booking time
    };

    // Fetch existing appointments from localStorage and add the new one
    const existing = JSON.parse(localStorage.getItem('appointments')) || [];
    localStorage.setItem('appointments', JSON.stringify([...existing, appointment]));

    // Show success message and reset selections
    toast.success('Appointment booked successfully!');
    setSelectedDay('');
    setSelectedTime('');
  };

  // Handle if doctor is not found
  if (!doctor) {
    return (
      <div className="text-center py-20 text-lg font-medium text-gray-600">
        Doctor not found or missing data.
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      {/* Toast Container for notifications */}
      <ToastContainer />

      {/* Doctor Profile Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-8 border border-gray-300 rounded-xl p-6 shadow-md bg-white">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-48 h-48 object-cover rounded-xl"
        />
        <div className="flex-1 space-y-2">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            {doctor.name} <span className="text-green-500">✔️</span>
          </h2>
          {/* Doctor details */}
          <p><strong>Speciality:</strong> {doctor.speciality}</p>
          <p><strong>About:</strong> {doctor.about || "This doctor is highly experienced in their field."}</p>
          <p><strong>Experience:</strong> {doctor.experience || "5+ years"}</p>
          <p><strong>Fee:</strong> ₹{doctor.fee || "500"}</p>
        </div>
      </div>

      {/* Day Selection Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Select a Day</h3>
        <div className="flex flex-wrap gap-3">
          {days.map((day, i) => (
            <button
              key={i}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-2 rounded-lg border transition-all ${
                selectedDay === day
                  ? 'bg-green-500 text-white border-green-600'
                  : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Time Slot Selection Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Select a Time</h3>
        <div className="flex flex-wrap gap-3">
          {timeSlots.map((slot, i) => (
            <button
              key={i}
              onClick={() => setSelectedTime(slot)}
              className={`px-4 py-2 rounded-lg border transition-all ${
                selectedTime === slot
                  ? 'bg-green-500 text-white border-green-600'
                  : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      {/* Book Appointment Button */}
      <div className="text-center">
        <button
          onClick={handleBookAppointment}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-lg transition-all"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Appointment;
