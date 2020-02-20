// import react functionality
import React, {useEffect, useState} from 'react';

const DigitalClock = () => {

    const [time, setTime] = useState(new Date().getTime());
    const [readableTime, setReadableTime] = useState(null);

    useEffect(() => {
        async function getTime() {
            setTime(new Date().getTime());
        }

        setReadableTime(convertTimeToReadableDateString);

        const timerId = setInterval(() => getTime(), 500);
        return () => clearInterval(timerId);
    },[time]);

    // return hh:mm:ss
    const convertTimeToReadableDateString = () => {
        const date = new Date();
        const h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();
        return `${toBits(h,2)}:${toBits(m,2)}:${toBits(s,2)}`;
    }

    // zet 0 voor als kleiner als 2 bits
    const toBits = (input, n) => {
        input = String(input);
        while(input.length < n) {
            input = `0${input}`;
        }
        return input;
    }

    return (
        <div>
            <h1>DIGITAL CLOCK</h1>
            {time}
            {/* !! als niet null */}
            {!!readableTime ? 
            <p>{readableTime}</p> :
            <p>der is iet kapot</p>}
        </div>
    );
};

export default DigitalClock;