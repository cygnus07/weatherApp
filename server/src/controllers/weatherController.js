import axios from 'axios'
import Cache from '../models/cacheModel.js'

const GEOCODING_API_URL= 'https://api.opencagedata.com/geocode/v1/json'
const WEATHER_API_URL= 'https://api.open-meteo.com/v1/forecast'
// const GEOCODING_API_KEY = process.env.GEOCODING_API_KEY

export const getWeatherByCity = async (req,res) => {
    const { city } = req.query
    if(!city) return res.status(400).json({ error: 'city name is required'})

    try {
        const cachedData = await Cache.findOne({ city })
        if(cachedData)
            return res.status(200).json({ source: 'cache', data: cachedData.data})

        // console.log(process.env.GEOCODING_API_KEY)

        const geoResponse = await axios.get(GEOCODING_API_URL, {
            params: {
                q: city,
                key: process.env.GEOCODING_API_KEY
            }
        })
        // console.log(GEOCODING_API_URL)
        // console.log("till here not okay")
        // console.log(geoResponse)

        if(!geoResponse.data.results.length)
            return res.status(404).json({ error: 'city not found'})

        const { lat, lng } = geoResponse.data.results[0].geometry
        // console.log(lat,lng)

        const weatherResponse = await axios.get(WEATHER_API_URL, {
            params: {
                latitude: lat,
                longitude: lng,
                hourly: 'temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,cloud_cover',
                daily: 'temperature_2m_max,temperature_2m_min,sunrise,sunset',
                timezone: 'auto'
            }
        })
        // console.log(weatherResponse)

        const weatherData = weatherResponse.data.hourly

        await Cache.create({
            city,
            data: weatherData
        })

        res.status(200).json({
            source: 'api',
            data: weatherData
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error while fetching the weather by city"})
    }
}