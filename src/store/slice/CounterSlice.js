import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countValue: 0,
};

const CounterSlice = createSlice({
    name: "counter",//name
    initialState: initialState,//initial State
    reducers: {//reducers functions (i.e, plusOne, miusOne, reset, setCounterValue are the reducers functions)
        plusOne: (state, action) => {
            state.countValue += 1;
            return state;
        },
        minusOne: (state, action) => {
            state.countValue -= 1;
            return state;
        },
        reset: (state, action) => {
            state.countValue = 0;
            return state;
        },
        setCounterValue: (state, action) => {
            state.countValue = action.payload.value;
            return state;
        },
    }
})

// Action creators are generated for each case reducer function
export const { plusOne, minusOne, reset, setCounterValue } = CounterSlice.actions

export default CounterSlice.reducer;