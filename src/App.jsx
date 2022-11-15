import './App.scss';
import { useEffect, useState, useRef } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherDisplay from './Containers/WeatherDisplay/WeatherDisplay';
import Nav from './Components/Nav/Nav';
import Search from './Components/Search/Search';
import Button from './Components/Button/Button';
import Hourly from './Containers/Hourly/Hourly';
import Modal from './Components/Modal/Modal';


function App() {

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [weatherData, setWeatherData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [unit, setUnit] = useState("temp_c")
  const searchForm = useRef(null);

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
    setTimeout(function () {
      findLocation()
    }, 1000)
  }, [])

  const localWeather = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${latitude}, ${longitude}&days=7&aqi=no`;


  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
      console.log(weatherData);
    } catch (error) {
      window.alert("That place doesn't seem to exist! Try checking your spelling.")
    }
  }

  console.log(weatherData);

  const captureInput = (e) => {
    e.preventDefault()
    const chosenPlace = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${searchForm.current.value}&days=7&aqi=no`
    console.log(chosenPlace);
    fetchData(chosenPlace)
    searchForm.current.value = "";
  }

  const currentHour = new Date().getHours();
  let greeting = "Good Morning!";

  if (currentHour >= 12) {
    greeting = "Good Afternoon!";
  }

  if (currentHour >= 18) {
    greeting = "Good Evening!";
  }

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const handleUnit = (e) => {
    if(e.target.checked){
      if(e.target.id === "c"){
        setUnit("temp_c")
        document.getElementById('f').checked = false;
        console.log(unit);
      } else if (e.target.id === "f") {
        setUnit("temp_f")
        document.getElementById('c').checked = false;
        console.log(unit);
      }
    }
  }


  return (
    <Router>
      <div className="app">
        <Nav fetchData={fetchData} localWeather={localWeather} weatherData={weatherData} captureInput={captureInput} searchForm={searchForm} toggleModal={toggleModal} />
        <div className='main'>
          {showModal && <Modal toggleModal={toggleModal} handleUnit={handleUnit} />}
          {weatherData.location == undefined && <div className='loading'>
            <h2>{greeting}</h2>
            <h2 className='loading__text'>Choose Location</h2>
            <Button fetchData={fetchData} localWeather={localWeather} />
            <Search captureInput={captureInput} searchForm={searchForm} />
          </div>}
          <Routes>
            <Route path='forecast/:dayOfWeek' element={<Hourly unit={unit} place={weatherData.location} />} />
            <Route path='/' element={weatherData.location != undefined && <WeatherDisplay unit={unit} weatherData={weatherData} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
