import { useState } from 'react';

const WeatherForm = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <header className="w-full bg-gradient-to-r from-blue-400 to-blue-500 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 15a4 4 0 018 0m0 0a4 4 0 008 0m-8 0v6m0-6a4 4 0 01-8 0m8 0a4 4 0 018 0"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wide">Weather Now</h1>
        </div>

        
        <form
          className="flex flex-col md:flex-row items-center gap-3"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full md:w-64 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default WeatherForm;
