import React from 'react'
import {Card} from 'react-bootstrap'
import './App.css'

const CurrentWeatherCard = ({weather, temp, temp_min, temp_max, main, icon}) => {

    return (
    <Card style={{width: '11rem'}} className="bg-dark text-white">
        <Card.Img 
            variant="top" 
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
             //datetime is received in milliseconds, let's turn into local date time
        />
        <Card.Body>
            <Card.Title>{main}</Card.Title>
            <p>{weather[0].main}</p>
            <p>Min: {temp_min}&deg;C</p>
            <p>Max: {temp_max}&deg;C</p>
        </Card.Body>

    </Card>
    )
}

export default CurrentWeatherCard
