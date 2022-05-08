const Timer = ({ minutes, seconds }) => {
  return (
    <>
      <p>
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </p>
    </>
  );
};

export default Timer;
