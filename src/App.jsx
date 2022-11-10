import './App.css';
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
}

useEffect(() => {
    setTimeout(function(){
  findLocation()
    }, 1000)
}, [weatherData]);

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

const toggleView = () => {
  setLocal(!local)
  if(local){
    fetchData(localWeather)
  }else {
    fetchData(localWeather)
  }
}

  return (
    <div className="App">
      <Nav toggleView={toggleView}/>
      {pending && <div className='loading'>Loading...</div>}
      {/* {weatherData != undefined && <WeatherDisplay weatherData={weatherData}/>} */}
    </div>
  );
}

export default App;
