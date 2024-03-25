import React from 'react';
import './App.css';
import NewTimer from './components/NewTimer';
import ListTimers from './components/ListTimers';

export default function App() {
    return (
        <div className="App">
            <h1>LookTime</h1>
            <NewTimer />
            <ListTimers />
        </div>
    );
}