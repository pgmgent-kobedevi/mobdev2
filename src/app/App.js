import React, {useState, Component} from 'react';

import {DigitalClock, DigitalClockExtended, BinaryClock} from './components';

import logo from './logo.svg';
import './App.css';

const App = () => {

	const [message, setMessage] = useState("Hello world");
	const [number, setNumber] = useState(1);

	const manipulateState = (e) => {
		setNumber(number + 1);
		setMessage(`Greetings! Clicked ${number} times`);
	}

  	return (
    	<div className="App">
      		<header className="App-header">
        		<img src={logo} className="App-logo" alt="logo" />
        		<p>
					Edit <code>src/App.js</code> and save to reload.
        		</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
        		>
					{message}
        		</a>
				<button onClick={(e) => manipulateState(e)}>Manipulate state</button>
      		</header>
			  <DigitalClock/>
			  <DigitalClockExtended/>
			  <BinaryClock/>
    	</div>
  	);
}

export default App;
