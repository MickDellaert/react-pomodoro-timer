import { useEffect, useState } from "react";
import Button from "./Button";
import Timer from "./Timer";

const PomodoroContainer = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  const countDown = () => {
    setRunning(true);
    setSeconds(seconds - 1);

    console.log(seconds);
  };

  useEffect(() => {
    if (running && seconds > 0) {
      const intervalId = setInterval(
        () => setSeconds((seconds) => seconds - 1),
        1000
      );
      return () => clearInterval(intervalId);
    }
  });

  const setShortBreak = () => {
    setRunning(false);
    setSeconds(10);
  };

  const setLongBreak = () => {
    setRunning(false);
    setSeconds(20);
  };

  const stop = () => {
    setRunning(false);
  };

  return (
    <>
      <Button seconds={seconds} handleClick={setShortBreak} name="set short" />
      <Button handleClick={setLongBreak} name="set long" />
      <Timer seconds={seconds} />
      <Button handleClick={countDown} name="start" />
      <Button handleClick={stop} name="stop" />
    </>
  );
};

export default PomodoroContainer;
