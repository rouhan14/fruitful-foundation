import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); 
  };

  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'text-lg font-medium hover:font-semibold cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-red-700 underline'
      : 'text-lg font-medium hover:font-semibold cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-red-700';
  };

  return (
    <nav className="bg-red-700 text-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center h-20 px-11">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.JPG" className="w-16 h-16 rounded-full shadow-xl transform transition-transform duration-300 hover:scale-105" alt="Logo" />
            <span className="font-semibold text-white text-2xl hover:text-yellow-400 transition-colors duration-300">Fruitful Foundation</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center justify-center flex-grow gap-10">
          <Link className={getLinkClass('/')} to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link className={getLinkClass('/about')} to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link className={getLinkClass('/blogs')} to="/blogs" onClick={closeMenu}>
            Blogs
          </Link>
          <Link className={getLinkClass('/team')} to="/team" onClick={closeMenu}>
            Team
          </Link>
          <Link className={getLinkClass('/projects')} to="/projects" onClick={closeMenu}>
            Our Projects
          </Link>
        </div>


        <div className="hidden md:block">
          <Link to="/contacts">
            <button className="bg-white text-red-600 font-semibold py-2 px-6 rounded-lg shadow-lg text-lg hover:bg-red-800 hover:text-white transition-colors duration-300 transform hover:scale-105">
              Donate Now
            </button>
          </Link>
        </div>

        <div className="md:hidden">
          <button
            className="focus:outline-none"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 text-white transition-all duration-300 transform hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-red-700 text-white py-4 px-6 rounded-lg transition-all duration-300`}
      >
        <div className="flex flex-col items-center space-y-4">
        <Link className={getLinkClass('/')} to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link className={getLinkClass('/about')} to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link className={getLinkClass('/blogs')} to="/blogs" onClick={closeMenu}>
            Blogs
          </Link>
          <Link className={getLinkClass('/team')} to="/team" onClick={closeMenu}>
            Team
          </Link>
          <Link className={getLinkClass('/projects')} to="/projects" onClick={closeMenu}>
            Our Projects
          </Link>

          <Link
            className="w-full"
            to="/contacts"
            onClick={closeMenu}
          >
            <button className="bg-white text-red-600 font-semibold py-2 px-6 rounded-lg shadow-lg text-lg hover:bg-red-800 hover:text-white w-full transition-all duration-300 transform hover:scale-105">
              Donate Now
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
