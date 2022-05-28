import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (timer > 100) {
        clearInterval(id);
      } else {
        setTimer(timer+1);
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  });
  return <div>Timer Count Down :{timer}</div>;
};

export default Timer;
