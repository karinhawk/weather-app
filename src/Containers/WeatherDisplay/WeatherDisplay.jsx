import "./WeatherDisplay.scss"

const WeatherDisplay = (weatherData) => {
    const location = weatherData.weatherData.location;
    const weatherInfo = weatherData.weatherData.current;
    console.log(location.name);

  return (
    <div className='display'>
        <h1>WEATHER TIME</h1>
        <img src={weatherInfo.condition.icon}/>
        <h3>{weatherInfo.condition.text}</h3>
        <h2>{location.name}, {location.country}</h2>
        <h2>{weatherInfo.temp_c} 'C</h2>
    </div>
  )
}

export default WeatherDisplay