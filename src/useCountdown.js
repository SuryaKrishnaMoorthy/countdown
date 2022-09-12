import { useState, useEffect, useRef } from "react";

const useCountdown = (time, timerOn) => {
  const interval = useRef(null);
  const totalTime = new Date(time).getTime(); //ms from 1970 to furture time

  //ms from currenttime to futuretime.ie.actual countdown val
  const [countdown, setCountdown] = useState(totalTime - new Date().getTime());

  useEffect(() => {
    interval.current = setInterval(() => {
      if (countdown > 0 && timerOn) {
        setCountdown(totalTime - new Date().getTime());
      } else {
        clearInterval(interval.current);
      }
    }, 1000);

    return () => clearInterval(interval.current);
  }, [totalTime, countdown]);

  console.log(countdown);
  return getValues(countdown);
};

const getValues = (countdown) => {
  let remainder;
  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  remainder = (countdown % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60);
  const minutes = Math.floor(remainder / (1000 * 60));
  remainder = remainder % (1000 * 60);
  const seconds = Math.floor(remainder / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };
