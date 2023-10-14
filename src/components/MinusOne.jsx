import React from 'react'
import { Button } from 'react-bootstrap'
import { minusOne } from '../store/slice/CounterSlice'
import { useDispatch } from 'react-redux'

const MinusOne = () => {

    const dispatch = useDispatch()
    return (
        <div>
            <Button variant='warning' onClick={
                (event) => dispatch(minusOne())
            }
            >
                Minus One
            </Button>
        </div>
    )
}

export default MinusOne
