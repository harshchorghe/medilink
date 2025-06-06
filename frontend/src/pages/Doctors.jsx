import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './Doctors.css';
import doc1 from '../assets/doc1.png';
import doc2 from '../assets/doc2.png';
import doc3 from '../assets/doc3.png';
import doc4 from '../assets/doc4.png';
import doc5 from '../assets/doc5.png';

const Doctors = () => {
  const specialities = ['All', 'General physician', 'Gynecologist', 'Dermatologist', 'Pediatrician', 'Neurologist', 'Gastroenterologist'];
  const [selectedSpeciality, setSelectedSpeciality] = useState('All');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const doctorImages = [doc1, doc2, doc3, doc4, doc5];

  useEffect(() => {
    const querySpeciality = searchParams.get('speciality');
    if (querySpeciality && specialities.includes(querySpeciality)) {
      setSelectedSpeciality(querySpeciality);
    } else {
      setSelectedSpeciality('All');
    }
  }, [searchParams]);

  const allDoctors = Array(15).fill(0).map((_, i) => ({
    id: i,
    name: `Dr. Richard James `,
    speciality: specialities[(i % (specialities.length - 1)) + 1], // Skip "All"
    available: true,
    image: doctorImages[i % doctorImages.length],
  }));

  const filteredDoctors =
    selectedSpeciality === 'All'
      ? allDoctors
      : allDoctors.filter(doc => doc.speciality === selectedSpeciality);

  return (
    <div className="all-doctors-container">
      <div className="sidebar">
        {specialities.map((item, i) => (
          <button
            key={i}
            className={`filter-btn ${selectedSpeciality === item ? 'active' : ''}`}
            onClick={() => setSelectedSpeciality(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="doctor-grid">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc) => (
            <div
              className="doctor-card"
              key={doc.id}
              onClick={() => navigate(`/appointment/${doc.id}`, { state: doc })}
              style={{ cursor: 'pointer' }}
            >
              <img src={doc.image} alt="Doctor" />
              <h4>{doc.name}</h4>
              <p>{doc.speciality}</p>
            </div>
          ))
        ) : (
          <p style={{ padding: '20px' }}>No doctors found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Doctors;
