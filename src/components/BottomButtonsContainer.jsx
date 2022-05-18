import Button from "./Button";

const BottomButtonsContainer = ({
  running,
  setRunning,
  setStopped,
  setMinutes,
  setSeconds,
  getSavedMinutes,
  getSavedSeconds,
}) => {
  const countDown = () => {
    setRunning(true);
    setStopped(false)
  };

  const stop = () => {
    setStopped(true);
  };

  const reset = () => {
    setRunning(false);
    if (running) {
      setMinutes(getSavedMinutes);
      setSeconds(getSavedSeconds);
    }
  };

  return (
    <div className="bottom-btn-row">
      <Button handleClick={countDown} name="Start" />
      <Button handleClick={stop} name="Stop" />
      <Button handleClick={reset} name="Reset" />
    </div>
  );
};

export default BottomButtonsContainer;
