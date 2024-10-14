import React, { useState } from 'react';

// A sample list of cities/areas in India for search suggestions
const indianCities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad',
  'Chennai', 'Kolkata', 'Surat', 'Pune', 'Jaipur', 'Lucknow',
  'Nagpur', 'Indore', 'Patna', 'Bhopal', 'Vadodara', 'Ghaziabad',
  'Agra', 'Varanasi', 'Guwahati', 'Ranchi', 'Chandigarh'
];

const Search = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Handle search input change
  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    // Filter the Indian cities based on the query
    setSuggestions(
      indianCities.filter((city) =>
        city.toLowerCase().startsWith(value.toLowerCase())
      )
    );
  };

  return (
    <div className="flex justify-between px-72 pt-24  min-h-screen bg-gray-100">
      <div className="relative w-80">
        <input
          type="text"
          className="w-full p-3 text-sm text-black border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 bg-lime-200"
          placeholder="Search for an area in India..."
          value={query}
          onChange={handleInputChange}
        />

        {/* Suggestions dropdown */}
        {query && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
            {suggestions.length > 0 ? (
              suggestions.map((city, index) => (
                <div
                  key={index}
                  className="cursor-pointer p-2 hover:bg-gray-100"
                  onClick={() => setQuery(city)}
                >
                  {city}
                </div>
              ))
            ) : (
              <div className="p-2 text-gray-500">No results found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
