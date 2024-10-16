import React from 'react';
import Navbar from '../Navbar/Navbar';
import './About.css';
const About = () => {
  return (
    <div>
        <Navbar isDarkBackground={true} /> 
    <Navbar isDarkBackground={false} /> 
    
    <div className="min-h-screen bg-gradient-to-b from-gray-400 to-gray-900 text-white pt-16">
         
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-gray-800">
        <h1 className="text-5xl font-bold text-center animate-bounce">
          Welcome to Jugad
        </h1>
        <p className="text-xl mt-4 text-center">
          Your One-Stop Solution for Booking Movie Tickets Effortlessly
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-10 bg-gray-900">
        <h2 className="text-4xl font-semibold text-center mb-10">
          Our Mission
        </h2>
        <p className="text-lg leading-7 text-center">
          At Jugad, our mission is to make movie ticket booking as easy and convenient as possible. Whether you're at home or on the go, you can book your favorite movies with just a few clicks!
        </p>
        <div className="flex justify-center mt-10">
          <img
            src="https://via.placeholder.com/400x300" 
            alt="Mission"
            className="w-96 h-auto rounded-md shadow-lg transform hover:scale-110 transition duration-500"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-10 bg-gray-800">
        <h2 className="text-4xl font-semibold text-center mb-10">
          Why Choose Jugad?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Feature 1 */}
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Easy Booking</h3>
            <p className="text-lg">
              Book movie tickets with just a few taps, anytime and anywhere!
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Exclusive Discounts</h3>
            <p className="text-lg">
              Get access to exclusive discounts and offers when booking through Jugad.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Movie Reviews</h3>
            <p className="text-lg">
              Read the latest reviews to decide which movie to watch next!
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-10 bg-gray-900 text-center">
        <p className="text-gray-400">
          © 2024 Jugad | All Rights Reserved
        </p>
      </footer>
    </div></div>
  );
};

export default About;
