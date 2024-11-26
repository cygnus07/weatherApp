import mongoose from 'mongoose'
import { DB_NAME } from '../consonants.js'

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`MongoDb connected !! DB Host ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDb connection error", error)
        process.exit(1)
    }
}