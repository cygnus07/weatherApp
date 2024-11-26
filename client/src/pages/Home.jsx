import { useState } from 'react'
import WeatherForm from '../components/WeatherForm'
import WeatherDisplay from '../components/WeatherDisplay'
import axios from 'axios'

const Home = () => {
    const [weatherData, setWeatherData] = useState(null)

    const fetchWeather = async (city) => {
        try {
            const response = await axios.get(`http://localhost:9001/api/weather?city=${city}`)
            setWeatherData(response.data.data)
        } catch (error) {
            console.log("Error fetching weather data: ", error)
        }
    }
  return (
    <div className="container mx-auto p-8">
        <h1 className='text-3xl font-bold text-center mb-8'>Weather Dashboard</h1>
        <WeatherForm onSearch={fetchWeather} />
        <WeatherDisplay data={weatherData} />
    </div>
  )
}

export default Home