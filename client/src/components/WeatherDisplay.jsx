const WeatherDisplay = ({ data }) => {
    if (!data || !data.time || data.time.length === 0) {
      return (
        <div className="text-gray-700 text-center p-6">
          Data is loading or unavailable.
        </div>
      );
    }
  
    const numOfEntries = 24; 
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
  
    
    const startIndex = data.time.findIndex(
      (time) => new Date(time).getHours() === currentHour
    );
  
    const forecastData =
      startIndex !== -1
        ? data.time.slice(startIndex, startIndex + numOfEntries)
        : data.time.slice(0, numOfEntries);
  
    return (
      <div className="mt-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Hourly Forecast (Next 24 Hours) 🌦️
        </h2>
        <div className="flex overflow-x-auto space-x-6 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300">
          {forecastData.map((time, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-blue-400 bg-opacity-30 p-4 rounded-lg w-40 shadow-md"
            >
              
              <p className="text-sm font-semibold mb-2 text-yellow-300">
                {new Date(time).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
  
              
              <div className="space-y-2 text-center">
                <p>
                  <span className="font-semibold text-blue-100">Temp:</span>{' '}
                  <span className="text-white">
                    {data.temperature_2m[startIndex + index]}°C
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-blue-100">Humidity:</span>{' '}
                  <span className="text-white">
                    {data.relative_humidity_2m[startIndex + index]}%
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-blue-100">Wind:</span>{' '}
                  <span className="text-white">
                    {data.wind_speed_10m[startIndex + index]} m/s
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-blue-100">Precip:</span>{' '}
                  <span className="text-white">
                    {data.precipitation[startIndex + index]} mm
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-blue-100">Cloud:</span>{' '}
                  <span className="text-white">
                    {data.cloud_cover[startIndex + index]}%
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default WeatherDisplay;
  