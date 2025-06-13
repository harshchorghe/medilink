import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './Doctors.css';
import doc1 from '../assets/doc1.png';
import doc2 from '../assets/doc2.png';
import doc3 from '../assets/doc3.png';
import doc4 from '../assets/doc4.png';
import doc5 from '../assets/doc5.png';

const Doctors = () => {
  // List of available specialities
  const specialities = ['All', 'General physician', 'Gynecologist', 'Dermatologist', 'Pediatrician', 'Neurologist', 'Gastroenterologist'];

  // State for selected speciality filter
  const [selectedSpeciality, setSelectedSpeciality] = useState('All');

  // React Router hooks to read URL params and navigate
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Images assigned to doctors (cycled through)
  const doctorImages = [doc1, doc2, doc3, doc4, doc5];

  // Update filter from URL query parameter if valid
  useEffect(() => {
    const querySpeciality = searchParams.get('speciality');
    if (querySpeciality && specialities.includes(querySpeciality)) {
      setSelectedSpeciality(querySpeciality);
    } else {
      setSelectedSpeciality('All');
    }
  }, [searchParams]);

  // Dummy doctor data generation (15 doctors with different specialities)
  const allDoctors = Array(15).fill(0).map((_, i) => ({
    id: i,
    name: `Dr. Richard James `,
    speciality: specialities[(i % (specialities.length - 1)) + 1], // Skip "All"
    available: true,
    image: doctorImages[i % doctorImages.length],
  }));

  // Filter doctors based on selected speciality
  const filteredDoctors =
    selectedSpeciality === 'All'
      ? allDoctors
      : allDoctors.filter(doc => doc.speciality === selectedSpeciality);

  return (
    <div className="all-doctors-container">
      
      {/* Sidebar with speciality filter buttons */}
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

      {/* Grid displaying doctors as cards */}
      <div className="doctor-grid">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc) => (
            <div
              className="doctor-card"
              key={doc.id}
              onClick={() => navigate(`/appointment/${doc.id}`, { state: doc })} // Navigate to doctor detail with state
              style={{ cursor: 'pointer' }}
            >
              <img src={doc.image} alt="Doctor" />
              <h4>{doc.name}</h4>
              <p>{doc.speciality}</p>
            </div>
          ))
        ) : (
          // Fallback message if no doctors found
          <p style={{ padding: '20px' }}>No doctors found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Doctors;
