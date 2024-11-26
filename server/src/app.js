import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))
app.use(morgan("dev"))
app.use(cors())


// routes
import weatherRoutes from './routes/weatherRoutes.js'
import cacheRoutes from './routes/cacheRoutes.js'

app.use('/api', weatherRoutes)
app.use('/api', cacheRoutes)


export default app
