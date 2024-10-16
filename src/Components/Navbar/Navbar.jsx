import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ isDarkBackground }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Dynamically set text and shadow styles based on the background
  const textColorClass = isDarkBackground ? 'text-white' : 'text-black';
  const shadowClass = isDarkBackground ? 'shadow-md' : ''; // Add shadow for dark background only

  return (
    <nav className={`border-y-gray-500 fixed w-full z-10 top-0 ${textColorClass} ${shadowClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className={`text-2xl font-bold tracking-wide ${textColorClass}`}>
              Jugad Show
            </h1>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${isDarkBackground ? 'text-gray-400' : 'text-black'} hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:space-x-8 sm:items-center">
            <a
              href="/"
              className={`hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out ${textColorClass}`}
            >
              Home
            </a>
            <a
              href="/About"
              className={`hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out ${textColorClass}`}
            >
              About
            </a>
            <a
              href="#services"
              className={`hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out ${textColorClass}`}
            >
              Services
            </a>
            <a
              href="/Contact"
              className={`hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out ${textColorClass}`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition duration-300 ease-in-out"
            >
              Home
            </a>
            <a
              href="/About"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition duration-300 ease-in-out"
            >
              About
            </a>
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition duration-300 ease-in-out"
            >
              Services
            </a>
            <a
              href="/Contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
