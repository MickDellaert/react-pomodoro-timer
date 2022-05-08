import { useEffect, useState } from "react";
import Timer from "./Timer";
import TopButtonsContainer from "./TopButtonsContainer";
import BottomButtonsContainer from "./BottomButtonsContainer";

const PomodoroContainer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [running, setRunning] = useState(false);

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

  useEffect(() => {
    if (!running) {
      localStorage.setItem("minutes", JSON.stringify(minutes));
      localStorage.setItem("seconds", JSON.stringify(seconds));
    }
  });

  const savedMinutes = localStorage.getItem("minutes");
  const getSavedMinutes = JSON.parse(savedMinutes);

  const savedSeconds = localStorage.getItem("seconds");
  const getSavedSeconds = JSON.parse(savedSeconds);

  const totalTime = getSavedMinutes * 60 + getSavedSeconds;
  const remainingTime = totalTime - (minutes * 60 + seconds);
  const percentage = Math.round((remainingTime / totalTime) * 100);
  console.log(totalTime);
  console.log(remainingTime);
  console.log(percentage);

  return (
    <>
      <TopButtonsContainer
        setRunning={setRunning}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
      />
      <Timer minutes={minutes} seconds={seconds} />
      <BottomButtonsContainer
        setRunning={setRunning}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
        getSavedMinutes={getSavedMinutes}
        getSavedSeconds={getSavedSeconds}
      />
    </>
  );
};

export default PomodoroContainer;
