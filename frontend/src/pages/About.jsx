import React from 'react';
import aboutImage from '../assets/about_image.png'; // <-- Adjust path if needed

const About = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* About Section */}
      <section className="max-w-5xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">ABOUT US</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src={aboutImage}
            alt="Doctors"
            className="rounded-xl shadow"
          />
          <div>
            <p className="mb-4">
              Welcome to Prescripto, Your Trusted Partner for Managing Your
              Healthcare Needs Conveniently And Efficiently. At Prescripto, We
              Understand That Choosing the Right Doctor and When to Visit Can
              Be a Struggle. Doctor Appointments and Managing Your Health
              Records.
            </p>
            <p className="mb-4">
              Prescripto Is Committed to Excellence in Healthcare. We
              Continuously Strive to Enhance Our Services, Offering a
              Simplified Tool For Your Appointment and to Manage Ongoing Care.
              Prescripto Is Here to Support You Every Step Of The Way.
            </p>
            <p>
              <strong>Our Vision</strong><br />
              Our Vision At Prescripto Is to Create A Seamless Healthcare
              Experience For Every User. We Aim To Bridge The Gap Between
              Patients And Healthcare Providers, Making It Easier For You to
              Access The Care You Need, When You Need It.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-12">
        <h3 className="text-xl font-bold text-center mb-8">WHY CHOOSE US</h3>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 px-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold mb-2">EFFICIENCY</h4>
            <p>Simplified Appointment Scheduling That Fits Into Your Busy Lifestyle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold mb-2">CONVENIENCE</h4>
            <p>Access to A Network Of Trusted Healthcare Professionals Within Your Area.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold mb-2">PERSONALIZATION</h4>
            <p>Tailored Recommendations And Reminders To Help You Stay On Top Of Your Health.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
