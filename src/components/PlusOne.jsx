import React from 'react'
import { Button } from 'react-bootstrap'
import { plusOne } from '../store/slice/CounterSlice'
import { useDispatch } from 'react-redux'

const PlusOne = () => {

    const dispatch = useDispatch()

    const increase=()=>{
        dispatch(plusOne())
    }

    return (
        <div>
            <Button onClick={increase} variant='primary'>Plus One</Button>
        </div>
    )
}

export default PlusOne
