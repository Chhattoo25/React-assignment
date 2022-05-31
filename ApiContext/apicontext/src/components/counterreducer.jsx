import React, { useReducer } from "react";
const reducer = (counter, { type, payload }) => {
  switch (type) {
    case "INCREMENT": {
      return counter + payload;
    }
    case "DECREMENT": {
      return counter - payload;
    }
    default: {
      console.log("Type incorrect", type);
      return counter;
    }
  }
};

export const Counter = () => {
  const [counter, dispatch] = useReducer(reducer, 0);
  return (
    <div className="App">
      Counter:{counter}
      <div>
        <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
          -
        </button>
        <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
          +
        </button>
      </div>
    </div>
  );
};
