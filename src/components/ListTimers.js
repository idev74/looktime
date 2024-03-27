import React from 'react';
import { useSelector } from 'react-redux';
import TimerView from './TimerView.js';

export default function ListTimers() {
    const timers = useSelector(state => state.timers.value)
    console.log(timers[0])
    return (
        <div>
            {timers.map((timer, i) => <TimerView key={`timer-${i}`} index={i} {...timer} />)}
        </div>
    )
}
