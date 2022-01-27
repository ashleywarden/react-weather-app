import React from 'react'
import classes from './Conditions.module.css'

const Conditions = ({props}) => {

//change DATA back to responseObj to make this work again. changed to data for testing purposes
    return (
        <div>
                <div className='forecast-container'>

                    <div className='city-name'>
                        <h2>{props.data.name}, {props.data.sys.country}</h2>
                        
                    </div>


                    <div className='weather-icon'>
                    <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt={props.data.weather[0].icon} />
                    </div>

                    <div className='weather'>
                    {props.data.weather[0].main}
                    </div>

                    <div className='temperature'>
                     <h1>{Math.round(props.data.main.temp)}&deg;C</h1>
                    </div>

                    <div className='min-max-container'>
                        <div className='min-temperature'>
                            <p>Min: {Math.round(props.data.main.temp_min)}&deg;C</p>
                        </div>

                        <div className='max-temperature'>
                            <p>Max: {Math.round(props.data.main.temp_max)}&deg;C</p>
                        </div>
                    </div>

                </div>
        </div>
    )
}

export default Conditions
