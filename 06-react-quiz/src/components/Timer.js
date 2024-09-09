import { useEffect } from "react";

function Timer({ dispatch, secondsReamining }) {
  const min = Math.floor(secondsReamining / 60);
  const second = secondsReamining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}:{second < 10 && "0"}
      {second}
    </div>
  );
}

export default Timer;
