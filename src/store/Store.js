import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from "./slice/CounterSlice"
import UserReducer from './slice/CounterSlice'

//This creates a Redux store
export const store = configureStore({
  reducer: {
    //reducers goes here
    counter: CounterReducer,
    user: UserReducer
  },
})
export default store;