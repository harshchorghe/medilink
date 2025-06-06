import React from 'react';
import { useParams } from 'react-router-dom';
import './Appointment.css';
import { doctors } from '../assets/assets';

const Appointment = () => {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === parseInt(id));

  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const timeSlots = ['10:00AM', '11:00AM', '12:00PM', '01:00PM', '02:00PM'];

  if (!doctor) return <p>Doctor not found.</p>;

  return (
    <div className="appointment-container">
      {/* Doctor Profile Card */}
      <div className="doctor-profile-card">
        <img src={doctor.image} alt={doctor.name} className="profile-img" />
        <div className="doctor-info">
          <h2>{doctor.name} <span className="verified">✔️</span></h2>
          <p className="degree">{doctor.specialty}</p>
          <p className="about">{doctor.about}</p>
          <p className="experience"><strong>Experience:</strong> {doctor.experience}</p>
          <p className="fees"><strong>Appointment Fee:</strong> ₹{doctor.fee}</p>
        </div>
      </div>

      {/* Booking Slots */}
      <div className="booking-section">
        <h3>Booking slots</h3>
        <div className="booking-days">
          {days.map((day, i) => (
            <button className="day-btn" key={i}>{day}</button>
          ))}
        </div>

        <div className="booking-times">
          {timeSlots.map((slot, i) => (
            <button key={i} className="time-slot">{slot}</button>
          ))}
        </div>

        <button className="confirm-btn">Book an appointment</button>
      </div>
    </div>
  );
};

export default Appointment;
