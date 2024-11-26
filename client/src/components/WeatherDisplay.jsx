const WeatherDisplay = ({ data }) => {
    if (
        !data ||
        !Array.isArray(data.time) ||
        data.time.length === 0 ||
        !Array.isArray(data.temperature_2m) ||
        data.temperature_2m.length === 0
    ) {
        return <div>Data is loading or unavailable</div>;
    }

    const numOfEntries = Math.min(
        data.time.length,
        data.temperature_2m.length,
        data.relative_humidity_2m.length,
        data.wind_speed_10m.length
    );

    const formatTime = (timeString) => {
        const date = new Date(timeString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Hourly Forecast</h2>
            <div className="space-y-4">
                {data.time.slice(0, numOfEntries).map((hour, index) => (
                    <div key={index} className="grid grid-cols-2 gap-4 border-b py-2">
                        <div>{formatTime(hour)}</div>
                        <div>Temp: {data.temperature_2m?.[index] || "N/A"} °C</div>
                        <div>Humidity: {data.relative_humidity_2m?.[index] || "N/A"}%</div>
                        <div>Wind Speed: {data.wind_speed_10m?.[index] || "N/A"} km/h</div>
                        <div>Precipitation: {data.precipitation?.[index] || "N/A"} mm</div>
                        <div>Cloud Cover: {data.cloud_cover?.[index] || "N/A"}%</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeatherDisplay;
