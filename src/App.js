import { useState } from "react";
import CountdownTimer from "./CountdownTimer";
import "./styles.css";

export default function App() {
  const [timerOn, setTimerOn] = useState(false);
  const THREE_DAYS_IN_MS = 20 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div className="App">
      <h2>Countdown Timer</h2>
      <CountdownTimer time={dateAfterThreeDays} timerOn={timerOn} />
      <button onClick={() => setTimerOn(true)}>Start</button>
      {/* { && <button onClick={() => setTimerOn(false)}>Stop</button>} */}
    </div>
  );
}
