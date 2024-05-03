import React, { useState, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);

    // useEffect to update the timer every second
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        // Cleanup function to clear the interval when component unmounts or when seconds reach 10
        return () => {
            clearInterval(interval);
        };
    }, []); // empty dependency array means this effect runs only once after the initial render

    return (
        <div>
            <h1>Timer: {seconds} seconds</h1>
        </div>
    );
}

export default Timer;
