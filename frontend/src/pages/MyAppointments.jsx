import React, { useEffect, useState } from 'react';

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(storedAppointments);
  }, []);

  const cancelAppointment = (indexToRemove) => {
    const updatedAppointments = appointments.filter((_, i) => i !== indexToRemove);
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>
        My Appointments {appointments.length > 0 ? `(${appointments.length})` : ''}
      </h2>

      {appointments.length === 0 ? (
        <p style={{ fontStyle: 'italic' }}>You haven’t booked any appointments yet.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {appointments.map((a, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: '1rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '1rem',
                background: '#f9f9f9',
                alignItems: 'center'
              }}
            >
              <img
                src={a.image}
                alt={a.doctorName}
                style={{ width: '100px', height: '100px', borderRadius: '8px', objectFit: 'cover' }}
              />
              <div style={{ flex: 1 }}>
                <h4 style={{ marginBottom: '0.5rem' }}>{a.doctorName}</h4>
                <p><strong>Speciality:</strong> {a.speciality}</p>
                <p><strong>Day:</strong> {a.day}</p>
                <p><strong>Time:</strong> {a.time}</p>
                <p style={{ fontSize: '0.85rem', color: '#777' }}>
                  Booked on: <i>{a.bookedAt}</i>
                </p>
              </div>
              <button
                onClick={() => cancelAppointment(i)}
                style={{
                  background: '#e74c3c',
                  color: '#fff',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Cancel Appointment
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAppointments;
