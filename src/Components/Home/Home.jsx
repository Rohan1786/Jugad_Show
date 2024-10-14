import React, { useState } from 'react';
import ChatBot from '../ChatBot/ChatBot';

// Sample list of movies
const movies = [
  { title: 'Inception', genre: 'Action | Sci-Fi', year: 2010 },
  { title: 'Avengers: Endgame', genre: 'Action | Adventure', year: 2019 },
  { title: 'The Dark Knight', genre: 'Action | Drama', year: 2008 },
  { title: 'Forrest Gump', genre: 'Drama | Romance', year: 1994 },
  { title: 'Parasite', genre: 'Drama | Thriller', year: 2019 },
  { title: 'Interstellar', genre: 'Sci-Fi | Adventure', year: 2014 },
  { title: 'Joker', genre: 'Drama | Crime', year: 2019 },
  { title: 'Toy Story', genre: 'Animation | Adventure', year: 1995 },
  { title: 'Shutter Island', genre: 'Mystery | Thriller', year: 2010 },
  { title: 'The Lion King', genre: 'Animation | Drama', year: 1994 },
];

const Home = () => {
  const [query, setQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(movies);

  // Handle search input changes
  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);

    // Filter movies based on the search query
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?movies')" }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to Jugad Show</h1>
          <p className="text-xl">Discover the latest movies and shows!</p>
          <div className="mt-6">
            <input
              type="text"
              className="p-3 w-full sm:w-96 rounded-lg text-gray-700 focus:outline-none"
              placeholder="Search for movies, shows, and more..."
              value={query}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
      <ChatBot/>
      {/* Popular Movies Section */}
      <div className="mt-10 px-4 sm:px-8 lg:px-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Search Results</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={`https://source.unsplash.com/160x240/?${movie.title.replace(' ', '-')}`}
                  alt={movie.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-lg font-medium text-gray-700">{movie.title}</h3>
                  <p className="text-gray-500">{movie.genre} | {movie.year}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No movies found for "{query}"</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
