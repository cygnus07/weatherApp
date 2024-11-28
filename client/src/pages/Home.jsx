import { useState, useEffect } from "react";
import WeatherForm from "../components/WeatherForm";
import CurrentWeather from "../components/CurrentWeather";
import WeatherDisplay from "../components/WeatherDisplay";
import DailyForecast from "../components/DailyForecast";
import axios from "axios";

const Home = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourlyWeather, setHourlyWeather] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [city, setCity] = useState("");
  const DATA_EXPIRATION_TIME = 30 * 60 * 1000;

  const checkLocalStorage = () => {
    const storedCity = localStorage.getItem("city");
    const lastFetched = localStorage.getItem("lastFetched");
    const currentTime = new Date().getTime();

    if (storedCity && lastFetched && currentTime - lastFetched < DATA_EXPIRATION_TIME) {
      const storedData = localStorage.getItem("weatherData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setCurrentWeather(parsedData.current);
        setHourlyWeather(parsedData.hourly);
        setDailyForecast(parsedData.daily);
      }
    } else {
      if (storedCity) {
        fetchWeather(storedCity);
      }
    }
  };

  const fetchWeather = async (city) => {
    try {
      // const response = await axios.get(`http://localhost:9001/api/weather?city=${city}`);
      const response = await axios.get(`https://weather-app-pi-seven-71.vercel.app/api/weather?city=${city}`);
      // console.log(`${process.env.REACT_APP_BACKEND_URL}/api/weather?city=${city}`)
      // console.log(response)
      const { time, temperature_2m, relative_humidity_2m, wind_speed_10m, precipitation, cloud_cover, weathercode } = response.data.data;

      const weatherData = {
        current: {
          temperature: temperature_2m[0],
          condition: "Clear",
          windSpeed: wind_speed_10m[0],
          airQuality: "Good",
        },
        hourly: { time, temperature_2m, relative_humidity_2m, wind_speed_10m, precipitation, cloud_cover, weathercode },
        daily: {
          time,
          temperature_2m_max: temperature_2m.slice(0, 10),
          temperature_2m_min: temperature_2m.slice(0, 10),
          weathercode: Array(10).fill("01d"),
        },
      };

      const currentTime = new Date().getTime();
      localStorage.setItem("city", city);
      localStorage.setItem("weatherData", JSON.stringify(weatherData));
      localStorage.setItem("lastFetched", currentTime.toString());

      setCurrentWeather(weatherData.current);
      setHourlyWeather(weatherData.hourly);
      setDailyForecast(weatherData.daily);
      setCity(city);
    } catch (error) {
      console.log("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    const storedCity = localStorage.getItem("city");
    if (storedCity) {
      setCity(storedCity);
    }
    checkLocalStorage();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300">
      <div className="flex flex-col items-center justify-center w-full px-4 py-10 space-y-8">
        <h1 className="text-4xl font-bold text-white text-center">
          Weather Dashboard
        </h1>
        <p className="text-lg text-blue-100 text-center">
          Get real-time weather updates for your favorite locations.
        </p>
        <div className="w-full max-w-md">
          <WeatherForm onSearch={fetchWeather} />
        </div>
        <div className="w-full max-w-5xl space-y-10 mt-8">
          {currentWeather && (
            <div className="p-6 bg-white rounded-lg shadow-md">
              <CurrentWeather data={currentWeather} city={city} />
            </div>
          )}
          {hourlyWeather?.time?.length > 0 && (
            <div className="p-6 bg-white rounded-lg shadow-md">
              <WeatherDisplay data={hourlyWeather} />
            </div>
          )}
          {dailyForecast?.time?.length > 0 && (
            <div className="p-6 bg-white rounded-lg shadow-md">
              <DailyForecast dailyData={dailyForecast} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
