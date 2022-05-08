import { useEffect, useState } from "react";
import Button from "./Button";
import Timer from "./Timer";

const PomodoroContainer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [running, setRunning] = useState(false);

  const countDown = () => {
    setRunning(true);
  };

  useEffect(() => {
    if (running) {
      const intervalId = setInterval(() => {

        if (seconds === 0 && minutes > 0) {
          setSeconds(59);
        }

        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalId);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  });

  const setFocus = () => {
    setRunning(false);
    setMinutes(1);
    setSeconds(10);
  };

  const setShortBreak = () => {
    setRunning(false);
    setMinutes(5);
    setSeconds(0);
  };

  const setLongBreak = () => {
    setRunning(false);
    setMinutes(20);
    setSeconds(0);
  };

  const stop = () => {
    setRunning(false);
  };

  return (
    <>
      <Button handleClick={setFocus} name="Focus" />
      <Button
        seconds={seconds}
        handleClick={setShortBreak}
        name="Short Break"
      />
      <Button handleClick={setLongBreak} name="Long Break" />
      <Timer minutes={minutes} seconds={seconds} />
      <Button handleClick={countDown} name="Start" />
      <Button handleClick={stop} name="Stop" />
    </>
  );
};

export default PomodoroContainer;
