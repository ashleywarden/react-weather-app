import React from 'react'
import { Col, Row } from 'react-bootstrap'
import WeatherCard from './WeatherCard'

const CurrentWeatherList = ({weathers}) => {
    return (
        <Row>
            {weathers.map(({weather, dt, temp, temp_min, temp_max, main}) => (
                <Col key={dt}>
                    <WeatherCard 
                        temp_max= {Math.round(main.temp_max)}
                        temp_min={Math.round(main.temp_min)}
                        dt={dt * 1000}
                        main={weather[0].main}
                        icon={weather[0].icon}
                    />
                </Col>
            ))}
        </Row>

    )
}

export default CurrentWeatherList
