import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Appointment = () => {
  const { id } = useParams();
  const location = useLocation();
  const locationDoctor = location.state;

  const [doctor, setDoctor] = useState(null);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const timeSlots = ['10:00AM', '11:00AM', '12:00PM', '01:00PM', '02:00PM'];

  useEffect(() => {
    if (locationDoctor) {
      setDoctor(locationDoctor);
      localStorage.setItem('selectedDoctor', JSON.stringify(locationDoctor));
    } else {
      const stored = JSON.parse(localStorage.getItem('selectedDoctor'));
      if (stored) setDoctor(stored);
    }
  }, [locationDoctor]);

  if (!doctor) {
    return <p style={{ padding: '2rem', textAlign: 'center' }}>Doctor not found or missing data.</p>;
  }

  const handleBookAppointment = () => {
    if (!selectedDay || !selectedTime) {
      toast.error('Please select both day and time slot');
      return;
    }

    const appointment = {
      doctorId: id,
      doctorName: doctor.name,
      speciality: doctor.speciality,
      image: doctor.image,
      day: selectedDay,
      time: selectedTime,
      bookedAt: new Date().toLocaleString(),
    };

    const existing = JSON.parse(localStorage.getItem('appointments')) || [];
    localStorage.setItem('appointments', JSON.stringify([...existing, appointment]));

    toast.success('Appointment booked successfully!');
    setSelectedDay('');
    setSelectedTime('');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <ToastContainer />

      <div style={{
        display: 'flex',
        gap: '20px',
        marginBottom: '2rem',
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '1rem'
      }}>
        <img
          src={doctor.image}
          alt={doctor.name}
          style={{
            width: '180px',
            height: '180px',
            borderRadius: '10px',
            objectFit: 'cover'
          }}
        />
        <div>
          <h2>{doctor.name} <span style={{ color: 'green' }}>✔️</span></h2>
          <p><strong>Speciality:</strong> {doctor.speciality}</p>
          <p><strong>About:</strong> {doctor.about || "This doctor is highly experienced in their field."}</p>
          <p><strong>Experience:</strong> {doctor.experience || "5+ years"}</p>
          <p><strong>Fee:</strong> ₹{doctor.fee || "500"}</p>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '10px' }}>Select a Day</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => setSelectedDay(day)}
              style={{
                padding: '10px 15px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                backgroundColor: selectedDay === day ? '#4CAF50' : '#f2f2f2',
                color: selectedDay === day ? '#fff' : '#000',
                cursor: 'pointer'
              }}
            >
              {day}
            </button>
          ))}
        </div>

        <h3 style={{ marginBottom: '10px' }}>Select a Time</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
          {timeSlots.map((slot, index) => (
            <button
              key={index}
              onClick={() => setSelectedTime(slot)}
              style={{
                padding: '10px 15px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                backgroundColor: selectedTime === slot ? '#4CAF50' : '#f2f2f2',
                color: selectedTime === slot ? '#fff' : '#000',
                cursor: 'pointer'
              }}
            >
              {slot}
            </button>
          ))}
        </div>

        <button
          onClick={handleBookAppointment}
          style={{
            padding: '12px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Appointment;
