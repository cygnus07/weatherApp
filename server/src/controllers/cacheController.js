import Cache from '../models/cacheModel.js'

export const getCachedWeather = async (req,res) => {
    try {
        const cachedData = await Cache.find()
        res.status(200).json(cachedData)
    } catch (error) {
        res.status(500).json({ message: 'error while retrieving cached data'})
    }
}


export const clearCache = async (req,res) => {
    try {
        await Cache.deleteMany({})
        res.status(200).json({ message: "Cache cleared successfully"})
    } catch (error) {
        res.status(500).json({ message: "Error while clearing the cache"})
    }
}