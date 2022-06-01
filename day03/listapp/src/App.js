// import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';
import TodoApp from './components/TodoApp';
// import Counter from './components/Counter';
function App() {
  // const [toggle,setToggle]= useState(false)
// console.log(toggle)

 
  return (
    
    <div className="App">
      <TodoApp></TodoApp>
     {/* <button onClick={()=>setToggle(!toggle)}>
       {toggle ? 'show Todo App':'show Counter App'}
     </button>

     {toggle ? <Counter></Counter> : <TodoApp></TodoApp>} */}
    
    </div>
  );
}

export default App;
