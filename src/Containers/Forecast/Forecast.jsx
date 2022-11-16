import { useState } from "react";
import { Link } from "react-router-dom";
import "./Forecast.scss"

const Forecast = ({ forecast, unit }) => {

    const forecastArr = forecast.forecastday;
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    return (
        <div className="forecast">
            {forecastArr.map((day) => {
                const date = new Date(day.date);
                const dayOfWeek = weekday[date.getDay()];
                const hourArr = day.hour;
                const temp = "avg" + unit;
                const avgTemperature = day.day[temp]
                return (
                    <div>
                        <div className="forecast__day">
                            <h2 className="forecast__day__weekday">{dayOfWeek}</h2>
                            <h3 className="forecast__day__temp">{avgTemperature}{unit === "temp_c" ? "°C" : "°F"}</h3>
                            <img className="forecast__day__icon" src={day.day.condition.icon} />
                            <Link to={`/forecast/${dayOfWeek}`} state={hourArr} unit={unit}>
                            <h3 className="forecast__day__hourly">Hourly forecast</h3>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Forecast