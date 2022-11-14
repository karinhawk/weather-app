import "./Hourly.scss";
import { useParams, useLocation, Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import downArrow from "../../assets/arrow-down.png";


const Hourly = ({ place }) => {
    const { dayOfWeek } = useParams();
    const location = useLocation();
    const hourArr = location.state;
    const currentHour = new Date().getHours();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date();
    const today = weekday[d.getDay()];
    console.log(today);



    return (
        <div className="hour-page">
            <Link to="/">
            <div className="hour-page__navigate">
                <img className="hour-page__navigate__arrow" src={arrow} alt="back arrow" />
                <button className="hour-page__navigate__button">Back to Weekly Forecast for {place.name}</button>
            </div>
            </Link>
            <h1 className="hour-page__heading">{dayOfWeek} in {place.name}</h1>
            <div className="hourly">
                {hourArr.map((hour) => {
                    const time = hour.time.split(" ").splice(1, 2).join("");
                    console.log(time);
                    console.log(time.split(":").splice(0, 1));
                    return (
                        <div className={time.split(":").splice(0, 1) == currentHour & dayOfWeek == today ? "hourly__current" : "hourly__hour"}>
                            {time.split(":").splice(0, 1) == currentHour & dayOfWeek == today ? <img className="hourly__arrow" src={downArrow}/> : null}
                            <h2 className="hourly__hour__time">{time}</h2>
                            <img className="hourly__hour__icon" src={hour.condition.icon} />
                            <h2 className="hourly__hour__temp">{hour.temp_c}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Hourly