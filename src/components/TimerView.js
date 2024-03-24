import React, { useState } from "react";

export default function TimerView({ index, name, time }) {
    const [isRunning, setIsRunning] = useState(false);

    const handleToggleTimer = () => {
        setIsRunning(prevIsRunning => !prevIsRunning);
    };

    return (
        <div>
            <h2>{name}</h2>
            <h1>{time}</h1>
            <button onClick={handleToggleTimer}>{isRunning ? "Stop" : "Start"}</button>
        </div>
    );
}
