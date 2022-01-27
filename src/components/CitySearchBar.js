import React, { useState } from 'react'
import { Row, Col, FormControl, Button } from 'react-bootstrap'

const CitySearchBar = () => {

    const [city, setCity] = useState('')
    
    return (
        <div>
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
        </div>
    )
}

export default CitySearchBar
