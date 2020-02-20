// import react functionality
import React, {useEffect, useState} from 'react';

import Digit from './Digit';
import './DigitalClockExtended.css';

const DigitalClockExtended = () => {

    const [time, setTime] = useState(new Date().getTime());
    const [readableTime, setReadableTime] = useState('00:00:00');

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
        <div className="digital-clock-extended">
            <h1>DIGITAL CLOCK EXTENDED</h1>
            
            <Digit v={readableTime.split(':')[0][0]} />
            <Digit v={readableTime.split(':')[0][1]} />
            :
            <Digit v={readableTime.split(':')[1][0]} />
            <Digit v={readableTime.split(':')[1][1]} />
            :
            <Digit v={readableTime.split(':')[2][0]} />
            <Digit v={readableTime.split(':')[2][1]} />
        </div>
    );
};

export default DigitalClockExtended;