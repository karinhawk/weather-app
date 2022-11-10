import "./Nav.scss"

const Nav = (toggleView) => {
  return (
    <div className="nav">
        <button onClick={toggleView}>Local Weather</button>
        <button onClick={toggleView}>Choose Location</button>
    </div>
  )
}

export default Nav