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
app.use(cors({
    origin: "https://weather-app-frontend-pi.vercel.app",
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
}))

app.get('/', (req, res) => {
    res.send('Welcome to the Weather App API!');
  });


// routes
import weatherRoutes from './routes/weatherRoutes.js'
import cacheRoutes from './routes/cacheRoutes.js'



app.use('/api', weatherRoutes)
app.use('/api', cacheRoutes)


export default app
