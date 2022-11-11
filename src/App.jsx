import './App.scss';
import { useEffect, useState } from 'react';
import WeatherDisplay from './Containers/WeatherDisplay/WeatherDisplay';
import Nav from './Components/Nav/Nav';


function App() {

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [weatherData, setWeatherData] = useState({});
  const [pending, setPending] = useState(true);
  const [local, setLocal] = useState(true)

  const findLocation = () => {

    const success = (position) => {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    }
    const error = () => {
      console.log("no");
    }
  navigator.geolocation.getCurrentPosition(success, error)
  fetchData(localWeather);
}

useEffect(() => {
    setTimeout(function(){
      findLocation()
    }, 1000)
}, [])

const localWeather = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${latitude}, ${longitude}&aqi=no`;
console.log(localWeather);
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setWeatherData(data);
    setPending(false)
    console.log(weatherData);
  } catch (error) {
    console.log(error);
  }
}

console.log(weatherData);


  return (
    <div className="App">
      <Nav fetchData={fetchData} localWeather={localWeather}/>
      {pending && <div className='loading'>Loading...</div>}
      {weatherData.location != undefined && <WeatherDisplay weatherData={weatherData}/>}
    </div>
  );
}

export default App;
