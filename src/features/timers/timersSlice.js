import { createSlice } from '@reduxjs/toolkit';
import Timer from './Timer';

const initialState = {
    value: []
}

export const timersSlice = createSlice({
    name: 'timers',
    initialState,
    reducers: {
        addTimer: (state, action) => {
            state.value.push(new Timer(action.payload))
        },

        toggleTimer: (state, action) => {
            state.value[action.payload].isRunning = !state.value[action.payload].isRunning
        },

        update: (state, action) => {
            state.value.map(timer => {
                if (timer.isRunning) {
                    // timer.time += action.payload
                    const time = timer.time += action.payload
                    const newTimer = { ...timer, time }
                    return newTimer
                }
                return timer
            })
        },
    },
})

export const { addTimer, toggleTimer, update } = timersSlice.actions

export default timersSlice.reducer