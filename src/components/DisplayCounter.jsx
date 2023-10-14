import React from 'react'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const DisplayCounter = () => {

    const counter = useSelector((state) => state.counter)

    return (
        <Card>
            <Card.Body>
                <h3>Counter: {counter.countValue}</h3>
            </Card.Body>
        </Card>
    )
}

export default DisplayCounter