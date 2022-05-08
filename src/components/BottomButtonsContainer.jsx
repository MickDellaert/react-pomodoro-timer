import Button from "./Button";

const BottomButtonsContainer = ({
  setRunning,
  setMinutes,
  setSeconds,
  getSavedMinutes,
  getSavedSeconds,
}) => {

  const countDown = () => {
    setRunning(true);
  };

  const reset = () => {
    setRunning(false);
    setMinutes(getSavedMinutes);
    setSeconds(getSavedSeconds);
  };

  const stop = () => {
    setRunning(false);
  };

  return (
    <div>
      <Button handleClick={countDown} name="Start" />
      <Button handleClick={stop} name="Stop" />
      <Button handleClick={reset} name="Reset" />
    </div>
  );
};

export default BottomButtonsContainer;
