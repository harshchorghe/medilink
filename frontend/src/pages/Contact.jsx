import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="py-10">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-center mb-10">Contact Us</h1>
      
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
  );
};

export default Contact;
