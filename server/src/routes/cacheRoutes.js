import express from 'express'
import { clearCache, getCachedWeather } from '../controllers/cacheController.js'

const router = express.Router()

router.get('/cache', getCachedWeather)
router.delete('/cache', clearCache)


export default router