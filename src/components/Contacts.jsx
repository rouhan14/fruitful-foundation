import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <>
      {/* Background with gradient animation using Tailwind CSS */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-gradient-to-tl from-[#ffffff] via-[#F4F6F9] to-[#E0E5EC] animate-pulse"></div>
      <div className="min-h-screen flex flex-col items-center justify-center py-16 px-6 bg-white relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#e13333] mb-12 text-center tracking-wider font-roboto transition-all duration-300 ease-in-out">
          Get in Touch
        </h1>

        {/* Social Icons with hover animations */}
        <div className="flex gap-12 mb-12">
          <Link
            to="https://www.linkedin.com/company/fruiti-foundation/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl md:text-5xl text-[#0077B5] hover:text-[#005682] transition-transform duration-300 transform hover:scale-125 hover:rotate-6"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>
          <Link
            to="https://www.instagram.com/fruitfulfoundation_?igsh=MWs4ZndvM3lhNWR5NA=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl md:text-5xl text-[#E1306C] hover:text-[#C13584] transition-transform duration-300 transform hover:scale-125 hover:rotate-6"
            aria-label="Instagram"
          >
            <FaInstagram />
          </Link>
        </div>

        {/* Donation Card with hover effects */}
        <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-xl max-w-lg mx-auto mb-12 transition-transform duration-300 hover:scale-110 hover:shadow-xl">
          <div className="flex justify-center mb-6">
            <img
              src="epaisa.jpeg"
              alt="Easypaisa Logo"
              className="w-32 h-32 object-cover rounded-full shadow-lg transition-transform duration-500 transform hover:scale-110 hover:rotate-2"
            />
          </div>
          <h2 className="text-3xl font-semibold mb-4 text-center text-[#3b4a58] tracking-wide leading-snug">
            Donate Now via Easypaisa
          </h2>
          <div className="text-center text-lg mb-4 text-gray-700 leading-relaxed">
            <strong className="text-[#1c723d]">Title:</strong> M Khazima Qureshi
          </div>
          <div className="text-center text-lg mb-4 text-gray-700 leading-relaxed">
            <strong className="text-[#1c723d]">Account No:</strong> 03005605002
          </div>
        </div>

        {/* Motivational Text */}
        <div className="text-center mt-8 text-gray-600">
          <p className="text-lg font-medium animate__animated animate__fadeIn animate__delay-1s">
            We appreciate your generosity. Every contribution counts.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contacts;
