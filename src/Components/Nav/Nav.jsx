import Button from "../Button/Button"
import Search from "../Search/Search"
import "./Nav.scss"

const Nav = ({fetchData, localWeather, weatherData, captureInput, searchForm}) => {
  return (
    <div className="nav">
     {weatherData.location != undefined && <div className="nav__options">
     <Button fetchData={fetchData} localWeather={localWeather}/>
      <Search captureInput={captureInput} searchForm={searchForm}/>
      </div>
  }
    </div>
  )
}

export default Nav