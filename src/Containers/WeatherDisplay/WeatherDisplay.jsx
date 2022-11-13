import "./WeatherDisplay.scss"
import Forecast from "../Forecast/Forecast";
import { useState } from "react";

const WeatherDisplay = (weatherData) => {

    const [showForecast, setShowForecast] = useState(false);

    const location = weatherData.weatherData.location;
    const weatherInfo = weatherData.weatherData.current;
    const forecast = weatherData.weatherData.forecast;
    console.log(location.name);

    const toggleForecast = () => {
      setShowForecast(!showForecast)
    }

  return (
    <div className='display'>
      <div className="display__main">
        <h2>{location.name}, {location.country}</h2>
        <h2>{weatherInfo.temp_c} °C</h2>
        <img src={weatherInfo.condition.icon}/>
        <h3>{weatherInfo.condition.text}</h3>
        <h3 onClick={toggleForecast}>{showForecast ? "Hide Forecast" : "Show Forecast"}</h3>
        </div>
        {showForecast && <Forecast forecast={forecast}/>}
    </div>
  )
}

export default WeatherDisplay