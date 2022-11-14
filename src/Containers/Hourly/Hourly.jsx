import { useParams, useLocation } from "react-router-dom";
import "./Hourly.scss";

const Hourly = () => {
    const { dayOfWeek } = useParams();
    const location = useLocation();
    const hourArr = location.state;
  return (
    <div className="hour-page">
        <h1>{dayOfWeek}</h1>
        <div className="hourly">
        {hourArr.map((hour) => {
            const time = hour.time.split(" ").splice(1, 2);
        
            return (
                <div className="hourly__hour">
                    <h2>{time}</h2>
                    <img  src={hour.condition.icon} />
                    <h2>{hour.temp_c}</h2>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Hourly