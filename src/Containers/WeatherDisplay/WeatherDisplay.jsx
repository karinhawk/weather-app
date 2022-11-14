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
        <div className="display__main__location">
          <h2 className="display__main__name">{location.name}</h2>
          <h2 className="display__main__country">{location.country}</h2>
        </div>
        <div className="display__main__weather">
          <h2 className="display__main__temp">{weatherInfo.temp_c} °C</h2>
          <div className="display__main__pic">
          <img className="display__main__icon" src={weatherInfo.condition.icon} />
          <h3 className="display__main__text">{weatherInfo.condition.text}</h3>
          </div>
        </div>
      </div>
      <h3 className="display__main__forecast" onClick={toggleForecast}>{showForecast ? "Hide Forecast" : "Show Forecast"}</h3>

      {showForecast && <Forecast forecast={forecast} />}
    </div>
  )
}

export default WeatherDisplay