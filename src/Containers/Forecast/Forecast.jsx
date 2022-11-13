import { useState } from "react";
import "./Forecast.scss"

const Forecast = ({ forecast }) => {

    const [dayForecast, setDayForecast] = useState(false);

    const forecastArr = forecast.forecastday;
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const toggleDayForecast = () => {
        setDayForecast(!dayForecast)
    }

    return (
        <div className="forecast">
            {forecastArr.map((day) => {
                const date = new Date(day.date);
                const dayOfWeek = weekday[date.getDay()];
                const hourArr = day.hour;
                return (
                    <div>
                        <div className="forecast__day" onClick={toggleDayForecast}>
                            <h2>{dayOfWeek}</h2>
                            <h3>{day.day.avgtemp_c} °C</h3>
                            <img src={day.day.condition.icon} />
                        </div>
                        {dayForecast && <div className="forecast__hours">
                            {hourArr.map((hour) => {
                                return (
                                    <div className="forecast__hour">
                                        <h3>{hour.temp_c} °C</h3>
                                        <img src={hour.condition.icon}/>
                                    </div>
                                )
                            })}
                        </div>}
                    </div>
                )
            })}
        </div>
    )
}

export default Forecast