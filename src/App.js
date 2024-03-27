import React from 'react';
import './App.css';
import NewTimer from './components/NewTimer.js';
import ListTimers from './components/ListTimers.js';

export default function App() {
    return (
        <div className="App">
            <h1>LookTime</h1>
            <NewTimer />
            <ListTimers />
        </div>
    );
}