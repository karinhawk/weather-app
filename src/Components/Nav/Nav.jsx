import "./Nav.scss"

const Nav = ({fetchData, localWeather}) => {
  return (
    <div className="nav">
      <button onClick={() => fetchData(localWeather)}>Local Weather</button>
    </div>
  )
}

export default Nav