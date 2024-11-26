import express from 'express'
import { getWeatherByCity } from '../controllers/weatherController.js'

const router = express.Router()

router.get('/weather', getWeatherByCity)

export default router