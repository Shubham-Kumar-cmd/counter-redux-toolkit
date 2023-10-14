import React from 'react'
import DisplayCounter from './DisplayCounter'
import PlusOne from './PlusOne'
import MinusOne from './MinusOne'
import { Col, Row } from 'react-bootstrap'
import Reset from './Reset'
import { useSelector } from 'react-redux'

const Main = () => {

    const counterState = useSelector((state) => state.counter.countValue)

    return (
        <div>
            <h1>Welcome to counter app</h1>
            <DisplayCounter />
            <Row className='mt-4'>
                <Col>
                    <MinusOne />
                </Col>
                <Col>
                    <Reset />
                </Col>
                <Col>
                    <PlusOne />
                </Col>
            </Row>
            <div>
                <h3>Counter: {counterState}</h3>
            </div>
        </div>
    )
}

export default Main
