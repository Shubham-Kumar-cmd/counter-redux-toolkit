import React, { useState } from 'react'
import DisplayCounter from './DisplayCounter'
import PlusOne from './PlusOne'
import MinusOne from './MinusOne'
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap'
import Reset from './Reset'
import { useDispatch, useSelector } from 'react-redux'
import { setCounterValue } from '../store/slice/CounterSlice'

const Main = () => {

    const counterState = useSelector((state) => state.counter.countValue)
    const dispatch = useDispatch()

    const [value, setValue] = useState(0)

    const changeCounterValue = () => {
        //action
        // dispatch(reducer(action()))
        dispatch(setCounterValue({ value: value }))
    }

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
            <div className='mt-3'>
                {/* <h3>Counter: {counterState}</h3> */}
                <Form.Group>
                    <FormControl
                        type='text'
                        placeholder='enter counter value'
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    >

                    </FormControl>
                </Form.Group>
                <Container className='mt-3'>
                    <Button onClick={changeCounterValue} variant='primary'>Set Counter Value</Button>
                </Container>
            </div>
        </div>
    )
}

export default Main
