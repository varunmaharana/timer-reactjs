import React from "react";
import Timer from "./Timer";
import "react-circular-progressbar/dist/styles.css";

import "./index.css";

const App = () => {
	const initTimeInSec = 60;

	const time = new Date();
	time.setSeconds(time.getSeconds() + initTimeInSec);

	return (
		<div className="app">
			<h1>Routine starting in...</h1>

			<div className="timerContainer">
				<Timer expiryTimestamp={time} inputSeconds={initTimeInSec} />
			</div>
		</div>
	);
};

export default App;
