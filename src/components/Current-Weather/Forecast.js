import { useState } from 'react'
import Conditions from './Conditions'
import classes from './Forecast.module.css'

const Forecast = (initialUrl) => {

    let [city, setCity] = useState('')
    let [responseObj, setResponseObj] = useState({})
    const [url, setUrl] = useState(initialUrl) //because url will change every time user searches a new city


    const getForecast = (e) => {

        e.preventDefault()
        setResponseObj({})


        const uriEncodedCity = encodeURIComponent(city)

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=metric&q=${uriEncodedCity}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "e67776521cmshd88d4bf5e0c8e46p16cc0fjsn0bd91cdc12f0",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(response => {
            if (response.cod !== 200) {
                throw new Error()
            }
    
            setResponseObj(response);
        })
        .catch(err => {
            console.log(err.message);
        });

    }

    getForecast.defaultProps ={
        uriEncodedCity: 'vancouver'
    }

    return (
        <div>
                        <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    className={classes.textInput}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />

                <button className={classes.Button} type="submit">Get Current Weather</button>
            </form>
            <Conditions responseObj={responseObj} />
        </div>
            
    )
}

export default Forecast
