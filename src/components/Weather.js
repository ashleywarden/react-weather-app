import { FaSnowflake } from 'react-icons/fa'


const Weather = ({ weather }) => {
    return (
        <div className="weekday">
            <h3>{weather.day}</h3>
            <h1>{weather.picture}</h1>
            <h2>{weather.temperature}</h2>
            <p>{weather.weatherType}</p>
        </div>
    )
}


export default Weather
