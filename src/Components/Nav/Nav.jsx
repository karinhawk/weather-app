import Button from "../Button/Button"
import Search from "../Search/Search"
import "./Nav.scss"
import menu from "../../assets/menu.png"

const Nav = ({fetchData, localWeather, weatherData, captureInput, searchForm}) => {
  return (
    <div className="nav">
      <div className="nav__bar">
      <img className="nav__menu" src={menu}/>
     {weatherData.location != undefined && <div className="nav__options">
     <Button fetchData={fetchData} localWeather={localWeather}/>
      <Search captureInput={captureInput} searchForm={searchForm}/>
      </div>
  }
  </div>
    </div>
  )
}

export default Nav