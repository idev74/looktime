import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTimer } from '../features/timers/timersSlice.js';
import { formatTime } from '../utils/index.js';
import './TimerView.css';

export default function TimerView({ index, name, time, isRunning }) {
    const dispatch = useDispatch();

    return (
        <div className='TimerView'>
            <h2>{name}</h2>
            <h1>{formatTime(time)}</h1>
            <button onClick={() => dispatch(toggleTimer(index))}>
                {isRunning ? "Stop" : "Start"}
            </button>
        </div>
    )
}