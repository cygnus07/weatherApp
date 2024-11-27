const CurrentWeather = ({ data, city }) => {
    if (!data) {
      return (
        <div className="text-gray-700 text-center p-6">
          Data is loading or unavailable.
        </div>
      );
    }
  
    const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
  
    const { temperature, condition, windSpeed, airQuality } = data;
  
    return (
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">
          {capitalizedCity}
        </h2>
  
        <h3 className="text-xl font-semibold mb-3 text-center">
          Current Weather 🌤️
        </h3>
  
        <div className="space-y-2 text-lg">
          <p>
            <span className="font-medium">Temperature:</span> {temperature}°C
          </p>
          <p>
            <span className="font-medium">Condition:</span> {condition}
          </p>
          <p>
            <span className="font-medium">Wind Speed:</span> {windSpeed} km/h
          </p>
          <p>
            <span className="font-medium">Air Quality:</span> {airQuality}
          </p>
        </div>
      </div>
    );
  };
  
  export default CurrentWeather;
  