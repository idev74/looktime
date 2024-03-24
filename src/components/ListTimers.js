import React from 'react'
import { useSelector } from 'react-redux'
import TimerView from './TimerView'

export default function ListTimers() {
    const timers = useSelector(state => state.timers.value)
    return (
        <div>
            {timers.map((timer, i) => {
                return (
                    <TimerView
                        key={i}
                        index={i}
                        name={timer.name}
                        time={timer.time}
                    />
                )
            })}
        </div>
    )
}
