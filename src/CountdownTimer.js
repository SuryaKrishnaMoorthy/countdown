import { useCountdown } from "./useCountdown";

const CountdownTimer = ({ time, timerOn }) => {
  const [days, hours, minutes, seconds] = useCountdown(time, timerOn);
  const checkExpiry = days + hours + minutes + seconds;
  return (
    <>
      {checkExpiry >= 0 && (
        <div>
          <span>{days}days: </span>
          <span>{hours} hours : </span>
          <span>{minutes} minutes : </span>
          <span>{seconds} seconds</span>
        </div>
      )}
    </>
  );
};

export default CountdownTimer;
