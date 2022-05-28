import React from "react";
import { useState,useEffect,useRef } from "react";
const Stopwatch = () => {
  const [watch, setWatch] = useState(0);
  // const [timerId, setTimerId] = useState(null);
  const timerId = useRef(null)
  
  const start = () => {
    if (!timerId.current) {
      let id = setInterval(() => {
        setWatch((prev) => prev + 1);
      }, 1000);
    timerId.current = id;
    }
  };

  const pause = () => {
    clearInterval(timerId.current);
    // setTimerId(null);
    timerId.current= null

  };

  const reset = () => {
    clearInterval(timerId.current);

    setWatch(0);
    timerId.current = null
  };
  useEffect(()=>{
    return reset;
  },[])
  return <div>
<h1 className="stopwatch">Stopwatch</h1>
<h1 className="count" ><span style={{color:watch%2===0?"violet":"red"}}>{watch}</span></h1>
<button onClick={start}>start</button>
<button onClick={pause}>pause</button>
<button onClick={reset}>reset</button>
  </div>;
};

export default Stopwatch;
