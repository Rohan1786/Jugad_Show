import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';

const Contact = ({ isDarkBackground }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to server or display confirmation message)
    console.log('Form submitted:', formData);
  };

  // Dynamically set text and background colors based on the theme
  const textColorClass = isDarkBackground ? 'text-white' : 'text-black';
  const backgroundClass = isDarkBackground ? 'bg-gray-900' : 'bg-white';
  const inputBackgroundClass = isDarkBackground ? 'bg-gray-800 text-white' : 'bg-white text-black';

  return (
<>
{/* <Navbar isDarkBackground={true} />   */}
<Navbar isDarkBackground={false} /> 
    <div className={`min-h-screen ${backgroundClass} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl font-bold tracking-wide text-center ${textColorClass}`}>
          Contact Us
        </h2>
        <p className={`mt-4 text-center text-lg ${textColorClass}`}>
          Feel free to reach out to us with any questions or concerns!
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 ${inputBackgroundClass} rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 ${inputBackgroundClass} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className={`appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 ${inputBackgroundClass} rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={`group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out`}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div></>
  );
};

export default Contact;
