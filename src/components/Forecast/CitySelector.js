import React, { useState } from 'react'
import { Row, Col, FormControl, Button } from 'react-bootstrap'
import './App.css'

const CitySelector = ({onSearch}) => {

    const [city, setCity] = useState('')

    return (
        <>
            <Row>
                <Col>
                <h1>Search a City</h1>
                </Col>
            </Row>

            <Row>
                <Col xs={4} className="text-center">
                    <FormControl 
                        placeholder="Enter City"
                        onChange={(event) => setCity(event.target.value)}
                        value={city}
                        // allows user to search with enter button. recieves callback function with event inside
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                <Button onClick={() => onSearch(city)}>Get 5 Day Forecast</Button>
                </Col>
            </Row>
        </>
    )
}

export default CitySelector
