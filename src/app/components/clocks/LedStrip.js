import React, {useState} from 'react';

import Led from './Led';

const Ledstrip = ({count, time}) => {

    
    const toBits = (input, n) => {
        input = String(input);
        while(input.length%n) {
            input = `0${input}`;
        }
        return input;
    }

    const ledstrip = [];        
    for (let index = 0; index < count; index++) {
            ledstrip.push(<Led status={toBits(Number(time).toString(2), count).charAt(index)}/>);
    }
    return (
        <div className="ledstrip">
            {ledstrip}
        </div>
    );
}

export default Ledstrip;