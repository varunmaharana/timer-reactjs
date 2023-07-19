import { useTimer } from "react-timer-hook";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Timer = ({ expiryTimestamp, inputSeconds }) => {
	const {
		seconds,
		minutes,
		hours,
		days,
		totalSeconds,
		isRunning,
		start,
		pause,
		resume,
		restart,
	} = useTimer({
		expiryTimestamp,
		onExpire: () => console.warn("onExpire called"),
	});

	return (
		<div className="timer">
			<CircularProgressbar
				value={totalSeconds}
				maxValue={inputSeconds}
				text={`${String(minutes).padStart(2, "0")}:${String(
					seconds
				).padStart(2, "0")}`}
				strokeWidth={5}
				styles={buildStyles({
					pathColor: "#E8A9A9",
					textColor: "#E8A9A9",
					trailColor: "#090580",
					backgroundColor: "#3e98c7",
				})}
			/>
			<div className="controls">
				<button onClick={start}>Start</button>
				<button onClick={pause}>Pause</button>
				<button onClick={resume}>Resume</button>
				<button
					onClick={() => {
						const time = new Date();
						time.setSeconds(time.getSeconds() + inputSeconds);
						restart(time);
					}}
				>
					Restart
				</button>
			</div>
		</div>
	);
};

export default Timer;
