import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?movies')" }}>
        <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to MovieWorld</h1>
          <p className="text-xl">Discover the latest movies and shows!</p>
          <div className="mt-6">
            <input
              type="text"
              className="p-3 w-full sm:w-96 rounded-lg text-gray-700 focus:outline-none"
              placeholder="Search for movies, shows, and more..."
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mt-10 px-4 sm:px-8 lg:px-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://source.unsplash.com/160x160/?action"
              alt="Action"
              className="w-full h-32 object-cover"
            />
            <div className="p-3 text-center">
              <h3 className="text-lg font-medium text-gray-700">Action</h3>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://source.unsplash.com/160x160/?comedy"
              alt="Comedy"
              className="w-full h-32 object-cover"
            />
            <div className="p-3 text-center">
              <h3 className="text-lg font-medium text-gray-700">Comedy</h3>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://source.unsplash.com/160x160/?drama"
              alt="Drama"
              className="w-full h-32 object-cover"
            />
            <div className="p-3 text-center">
              <h3 className="text-lg font-medium text-gray-700">Drama</h3>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://source.unsplash.com/160x160/?thriller"
              alt="Thriller"
              className="w-full h-32 object-cover"
            />
            <div className="p-3 text-center">
              <h3 className="text-lg font-medium text-gray-700">Thriller</h3>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://source.unsplash.com/160x160/?romance"
              alt="Romance"
              className="w-full h-32 object-cover"
            />
            <div className="p-3 text-center">
              <h3 className="text-lg font-medium text-gray-700">Romance</h3>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://source.unsplash.com/160x160/?horror"
              alt="Horror"
              className="w-full h-32 object-cover"
            />
            <div className="p-3 text-center">
              <h3 className="text-lg font-medium text-gray-700">Horror</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Movies Section */}
      <div className="mt-10 px-4 sm:px-8 lg:px-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Popular Movies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
          {/* Movie Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://source.unsplash.com/160x240/?movie"
              alt="Movie Poster"
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <h3 className="text-lg font-medium text-gray-700">Movie Title 1</h3>
              <p className="text-gray-500">Action | 2024</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://source.unsplash.com/160x240/?cinema"
              alt="Movie Poster"
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <h3 className="text-lg font-medium text-gray-700">Movie Title 2</h3>
              <p className="text-gray-500">Comedy | 2023</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://source.unsplash.com/160x240/?entertainment"
              alt="Movie Poster"
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <h3 className="text-lg font-medium text-gray-700">Movie Title 3</h3>
              <p className="text-gray-500">Drama | 2024</p>
            </div>
          </div>
          {/* Add more movies as needed */}
        </div>
      </div>
    </div>
  );
};

export default Home;
