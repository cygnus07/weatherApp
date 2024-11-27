const DailyForecast = ({ dailyData }) => {
    if (!dailyData || !dailyData.time || dailyData.time.length === 0) {
      return (
        <div className="text-gray-700 text-center p-6">
          Data is loading or unavailable.
        </div>
      );
    }
  
    const numOfEntries = 7; 
  
    
    const dailyForecastData = [];
  
    for (let i = 0; i < numOfEntries; i++) {
      const firstTimestampOfDay = dailyData.time[i * 24]; 
  
      
      const formattedDate = new Date(firstTimestampOfDay).toLocaleDateString(undefined, {
        weekday: 'short', 
        day: 'numeric',
        month: 'short', 
      });
  
      
      dailyForecastData.push({
        date: formattedDate,
        high: dailyData.temperature_2m_max[i],
        low: dailyData.temperature_2m_min[i],
        icon: dailyData.weathercode[i],
      });
    }
  
    return (
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-center">
          7-Day Weather Forecast 📅
        </h3>
        <ul className="space-y-4">
          {dailyForecastData.map((forecast, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-blue-500 bg-opacity-25 p-4 rounded-lg shadow-md"
            >
              
              <div className="flex items-center space-x-4">
                <img
                  src={`https://openweathermap.org/img/wn/${forecast.icon}.png`}
                  alt="weather icon"
                  className="w-12 h-12"
                />
                <p className="text-lg font-bold text-yellow-300">{forecast.date}</p>
              </div>
  
              
              <div className="text-right">
                <p>
                  <span className="font-semibold text-blue-200">High:</span>{' '}
                  <span className="text-white">{forecast.high}°C</span>
                </p>
                <p>
                  <span className="font-semibold text-blue-200">Low:</span>{' '}
                  <span className="text-white">{forecast.low}°C</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default DailyForecast;
  