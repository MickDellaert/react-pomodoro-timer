import Button from "./Button";

const TopButtonsContainer = ({ setRunning, setMinutes, setSeconds }) => {

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

  return (
    <div className="top-btn-row">
      <Button handleClick={setFocus} name="Focus" />
      <Button handleClick={setShortBreak} name="Short Break" />
      <Button handleClick={setLongBreak} name="Long Break" />
    </div>
  );
};

export default TopButtonsContainer;
