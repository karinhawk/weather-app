import "./Button.scss"

const Button = ({fetchData, localWeather}) => {
  return (
    <div>
        <button className='button' onClick={() => fetchData(localWeather)}>Local Weather</button>
    </div>
  )
}

export default Button