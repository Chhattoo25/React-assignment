import React, { useState, useEffect } from "react";

const Timerg = () => {
  const [milli, setMilli] = useState(0);
  const [second, setSeconds] = useState(0);
  const [minute, setMinutes] = useState(0);
  const [hour, setHour] = useState(0);

  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setMilli(milli + 1);
      if (milli === 99) {
        setSeconds(second + 1);
        setMilli(0)
      }
      if (second === 59) {
        setMinutes(minute + 1);
        setSeconds(0);
      }
      if (minute === 59) {
        setHour(hour + 1);
        setMinutes(0);
        setSeconds(0);
      }
    }, 10);
    return () => clearInterval(timer);
  });

  const stop = ()=>{
                       clearInterval(timer)
  }

  const restart = ()=>{
setHour(0)
setMilli(0)
setMinutes(0)
setSeconds(0)
  }
  return (
    <div className="timer">
      <h1>Timer</h1>
      <div>
        <h1>
          {hour < 10 ? "0" + hour : hour}hr:{minute < 10 ? "0" + minute : minute}m:
          {second < 10 ? "0" + second : second}s:
          {milli < 10 ? "0" + milli : milli}
        </h1>
        <button onClick={stop}>Stop</button>
        <button onClick={restart}>Restart</button>
      </div>
    </div>
  );
};

export default Timerg;
