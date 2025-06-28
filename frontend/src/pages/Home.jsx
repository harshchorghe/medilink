import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import headerImage from '../assets/header_img.png'; // Make sure the path is correct
import { assets } from '../assets/assets';

const Home = () => {
  return (
    <div className="font-sans  h-screen-all w-screen bg-gray-50 text-gray-800 overflow-x-hidden">

      {/* ======= Navbar ======= */}
              <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
          <div className="w-full px-6 py-4 flex justify-between items-center">
            
            {/* Logo + Brand */}
            <div className="flex  items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 text-white font-bold flex items-center justify-center rounded-full">
                APD
              </div>
              <div>
                <h1 className="font-bold text-lg">APADOC</h1>
                <p className="text-sm text-gray-500 leading-none">Healthcare Solutions</p>
              </div>
            </div>

            {/* Navigation */}
            <ul className="flex space-x-6 font-medium text-sm">
              <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
            </ul>
          </div>
        </nav>


      {/* ======= Hero Section ======= */}
      <section className=" flex bg-blue-100 h-150 flex-col md:flex-row items-center justify-center text-center md:text-left mt-10 px-6   ">

        {/* Left Content */}
        <div className="flex-1">
          <p className="text-sm text-gray-500">🌟 Trusted by 10,000+ patients worldwide</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Your Health, <span className="text-blue-600">Reimagined.</span>
          </h1>
          <p className="text-gray-600 mt-6 text-base md:text-lg">
            Experience the future of healthcare with AI-powered scheduling, intelligent medical records,
            and seamless doctor-patient connections. Your wellness journey starts here.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-10 flex-wrap justify-center md:justify-start">
            <Link to="/signup">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center space-x-2">
                <span>Start Your Journey</span>
                <FaArrowRight size={14} />
              </button>
            </Link>
           
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={headerImage}
            alt="Healthcare"
            className="w-full max-w-md mx-auto rounded-lg"
          />
        </div>
      </section>

      {/* ======= About Section (Optional Anchor) ======= */}
       <section  id="about" className="max-w-5xl h-100 bg-blue-50 mx-auto my-12 px-4">
              <h2 className="text-2xl font-bold text-center mb-6">About</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <img
                  src={assets.about_image}
                  alt="Doctors"
                  className="rounded-xl shadow"
                />
                <div>
                  <p className="mb-4">
                    Welcome to Apadoc, Your Trusted Partner for Managing Your
                    Healthcare Needs Conveniently And Efficiently. At Apadoc, We
                    Understand That Choosing the Right Doctor and When to Visit Can
                    Be a Struggle. Doctor Appointments and Managing Your Health
                    Records.
                  </p>
                  <p className="mb-4">
                    Apadoc Is Committed to Excellence in Healthcare. We
                    Continuously Strive to Enhance Our Services, Offering a
                    Simplified Tool For Your Appointment and to Manage Ongoing Care.
                    Apadoc Is Here to Support You Every Step Of The Way.
                  </p>
                  <p>
                    <strong>Our Vision</strong><br />
                    Our Vision At Apadoc Is to Create A Seamless Healthcare
                    Experience For Every User. We Aim To Bridge The Gap Between
                    Patients And Healthcare Providers, Making It Easier For You to
                    Access The Care You Need, When You Need It.
                  </p>
                </div>
              </div>
            </section>
      
            {/* Why Choose Us Section */}
            <section className="bg-blue-50 py-12">
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

      {/* ======= Contact Section (Optional Anchor) ======= */}
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto text-center bg-white shadow-inner">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <section className="max-w-5xl h-100 bg-blue-50 mx-auto my-12 px-4">
      <div className="py-10">
            {/* Page Heading */}
            {/* <h1 className="text-3xl font-bold text-center mb-10">Contact Us</h1> */}
            
            {/* Layout: Image and Form side by side on medium+ screens, stacked on small */}
            <div className="flex flex-col md:flex-row gap-10 items-center">
      
              {/* Contact Illustration Image */}
              <div className="w-full md:w-1/2">
                <img src={assets.contact_image} alt="Contact" className="w-full rounded-lg" />
              </div>
      
              {/* Contact Form Section */}
              <div className="w-full md:w-1/2">
                <form className="space-y-4">
                  
                  {/* Name Input Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
      
                  {/* Email Input Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Your email"
                    />
                  </div>
      
                  {/* Message Text Area */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>
      
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        

        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Got a question or need help? Reach out to our support team and we’ll get back to you as soon as possible.
        </p>
        <a
          href="mailto:support@apadoc.com"
          className="text-blue-600 underline hover:text-blue-800"
        >
          support@apadoc.com
        </a>
      </section>
      </section>

      {/* ======= Footer ======= */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t mt-8">
        © {new Date().getFullYear()} Apadoc Healthcare Solutions. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
