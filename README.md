
# WeatherApp

A weather dashboard that provides **hourly weather forecasts** and **7-day weather forecasts** for any city around the world. The app uses **Open-Meteo API** for weather data and **OpenCage Geocoding API** for city search suggestions. The app supports **caching** to improve performance and stores the **current city** in **localStorage** for persistence across page reloads.

### Deployed App Links:
- **Frontend** (React App): [https://weather-app-frontend-pi.vercel.app/](https://weather-app-frontend-pi.vercel.app/)
- **API** (Backend - Express Server): [https://weather-app-pi-seven-71.vercel.app/](https://weather-app-pi-seven-71.vercel.app/)

---

## Features:
- **Current Weather**: Displays current weather data for any city, including temperature, wind speed, and air quality.
- **Hourly Forecast**: Displays weather for the next 24 hours starting from the current hour.
- **7-Day Forecast**: Displays a daily weather forecast for the next 7 days.
- **Search Functionality**: Dynamic search suggestions for cities using the **OpenCage Geocoding API**.
- **Caching with MongoDB**: Caches weather data in MongoDB for faster subsequent requests and reduces API calls.
- **Local Storage**: Stores the last searched city in **localStorage** so it persists even after a page reload.

---

## Technologies Used:
- **Frontend**: 
  - **ReactJS**: For building the user interface.
  - **TailwindCSS**: For responsive and modern styling.
  - **Axios**: For making API requests.
- **Backend**:
  - **ExpressJS**: Web framework for the Node.js backend.
  - **MongoDB**: Used for caching weather data to reduce API calls.
  - **Axios**: For making requests to Open-Meteo and OpenCage APIs.
  - **dotenv**: For managing environment variables.
- **APIs**:
  - **Open-Meteo API**: For fetching weather data based on latitude and longitude.
  - **OpenCage Geocoding API**: For fetching city suggestions based on user input.

---

## API Endpoints:
### Backend Routes:
- **GET `/api/weather?city={city}`**:
  - Fetches weather data for the specified city (returns current, hourly, and 7-day forecast).
  - Example: `GET /api/weather?city=Patna`
- **GET `/api/cache`**:
  - Fetches cached weather data if available in MongoDB.
- **DELETE `/api/cache`**:
  - Clears the cached weather data from MongoDB.

---

## How to Run the App Locally

### Prerequisites:
- **Node.js** (v16+)
- **MongoDB** (or MongoDB Atlas)
- **Vercel CLI** (optional, for deployment)
- **API Keys**:
  - **OpenCage API Key**: For geocoding city names.
  - **MongoDB URI**: To connect your backend to MongoDB.
  - **Open-Meteo API**: Used for weather data (requires no API key, but might require rate-limiting).

### 1. Clone the Repository:
```bash
git clone https://github.com/yourusername/weatherApp.git
cd weatherApp
```

### 2. Install Dependencies:
#### For the **backend**:
```bash
cd server
npm install
```
Create a `.env` file in the `server` folder and add the following:
```plaintext
MONGO_URI=mongodb+srv://<your-mongo-connection-string>
PORT=9002
GEOCODING_API_KEY=<your-opencage-api-key>
```

#### For the **frontend**:
```bash
cd client
npm install
```

### 3. Run the App Locally:
#### Start the **backend**:
```bash
cd server
npm run dev
```

#### Start the **frontend**:
```bash
cd client
npm run dev
```

Your frontend should now be running at `http://localhost:3000`, and the backend will be available at `http://localhost:9002`.

### 4. Open the App:
Visit the React app in your browser and start searching for cities to get weather information!

---

## Advanced Features:

1. **Caching with MongoDB**:
   - The app caches weather data for faster retrieval using MongoDB. The cache is used if the data for a city has already been fetched, reducing the number of API calls to the Open-Meteo API.
   
2. **Local Storage**:
   - The current city search is saved in the browser's local storage, so even if the page is reloaded, the city remains selected until the user decides to search for a different city.

---

## How to Deploy on Vercel (Optional)
1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy the **frontend**:
   - In the `client` directory, run:
     ```bash
     vercel
     ```

3. Deploy the **backend**:
   - In the `server` directory, run:
     ```bash
     vercel
     ```

4. After deployment, Vercel will provide URLs for both the frontend and backend. Update the API URLs in the frontend to match the new deployed URLs.

---

## Conclusion
This weather app demonstrates how to integrate multiple APIs and use modern web development tools like **ReactJS**, **Express**, and **MongoDB**. With features like caching, dynamic city search, and local storage, it provides a smooth and efficient user experience.

---

### Optional Improvements:
- Add user authentication to save preferences.
- Support for additional weather data (air quality, pollen levels, etc.).
- Mobile app version using **React Native**.
