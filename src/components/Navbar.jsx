import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";

// TODO: replace with Fruitful Foundation's actual social media URLs once provided
const socialLinks = [];

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/blogs", label: "Blogs" },
  { to: "/events", label: "Events" },
  { to: "/team", label: "Team" },
  { to: "/projects", label: "Our Projects" },
  { to: "/contacts", label: "Contact" },
];

const NavPill = ({ to, label, onClick, isMobile }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} onClick={onClick} className="relative group block">
      <motion.span
        className={`relative z-10 block text-sm md:text-base font-semibold px-5 py-2 rounded-full cursor-pointer transition-colors duration-300 ${
          isMobile ? "w-full text-center" : ""
        } ${isActive ? "text-red-700" : "text-white group-hover:text-red-700"}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        {label}
      </motion.span>
      {/* Base pill background */}
      <span
        className={`absolute inset-0 rounded-full transition-colors duration-300 ${
          isActive ? "bg-white shadow-md" : "bg-red-700 group-hover:bg-white"
        }`}
      />
    </Link>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((v) => !v);

  return (
    <div className="sticky top-0 z-50 shadow-lg">
      {/* Row 1: social links + Donate Now only */}
      <div className="bg-red-900 text-white">
        <div className="container mx-auto flex items-center justify-between px-6 py-2">
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/80 hover:text-white transition-all duration-300 transform hover:scale-125"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
          <Link to="/contacts">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-700 font-semibold text-xs md:text-sm py-1.5 px-4 rounded-full shadow transition-colors duration-300 hover:bg-red-700 hover:text-white"
            >
              Donate Now
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Row 2: white bg, logo + nav pills */}
      <nav className="bg-white text-gray-900">
        <div className="container mx-auto flex justify-between items-center h-20 px-6">
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
            <img
              src="/logo.JPG"
              className="w-14 h-14 rounded-full shadow-md object-cover transform transition-transform duration-300 hover:scale-105"
              alt="Fruitful Foundation Logo"
            />
            <span className="font-bold text-red-700 text-xl hidden sm:block">
              Fruitful Foundation
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavPill key={link.to} {...link} />
            ))}
          </div>

          <button
            className="md:hidden focus:outline-none"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <svg
              className="w-7 h-7 text-red-700 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden bg-white"
        >
          <div className="flex flex-col items-center gap-3 px-6 pb-6">
            {navLinks.map((link) => (
              <div key={link.to} className="w-full">
                <NavPill {...link} onClick={closeMenu} isMobile />
              </div>
            ))}
          </div>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
