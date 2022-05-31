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
  // const[count,setCount]=useState(0)
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



// const reducer = (counter, action) => {
//   switch (action.type) {
//     case "INCREMENT": {
//       return counter+1;
//     }
//     case "DECREMENT": {
//       return counter - 1;
//     }
//     default: {
//       console.log("Type incorrect", type);
//       return counter;
//     }
//   }
// };

// export const Counter = () => {
//   // const[count,setCount]=useState(0)
//   const [counter, dispatch] = useReducer(reducer, 0);
//   return (
//     <div className="App">
//       Counter:{counter}
//       <div>
//         <button onClick={() => dispatch({ type: "DECREMENT"})}>
//           -
//         </button>
//         <button onClick={() => dispatch({ type: "INCREMENT" })}>
//           +
//         </button>
//       </div>
//     </div>
//   );
// };

// const reducer = (state,action) => {
//   switch (action.type) {
//     case "INCREMENT": {
//       return {...state,counter:state.counter+1}
//     }
//     case "DECREMENT": {
//       return {...state,counter:state.counter-1}
//     }
//     default: {
//       console.log("Type incorrect", type);
//       return state;
//     }
//   }
// };

// export const Counter = () => {
//   // const[count,setCount]=useState(0)
//   const [state, dispatch] = useReducer(reducer, {counter:0});
//   return (
//     <div className="App">
//       Counter:{state.counter}
//       <div>
//         <button onClick={() => dispatch({ type: "DECREMENT"})}>
//           -
//         </button>
//         <button onClick={() => dispatch({ type: "INCREMENT"})}>
//           +
//         </button>
//       </div>
//     </div>
//   );
// };

