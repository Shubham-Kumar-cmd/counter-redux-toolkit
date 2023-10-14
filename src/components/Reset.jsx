import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { reset as initialize} from '../store/slice/CounterSlice'

const Reset = () => {

    const dispatch=useDispatch()

    const reset=()=>{
        dispatch(initialize())
    }

  return (
    <div>
      <Button onClick={reset} variant='danger'>Reset Counter</Button>
    </div>
  )
}

export default Reset
