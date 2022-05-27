import React from 'react'
// import style from './Todo.module.css'
const Counter = (props) => {
const [count,setCount]= React.useState(0)

  return (
    <div>
 <h1 >Counter App:<span style={{color:count%2===0?"green":"red"}}>{count}</span></h1>
 <button onClick={()=>setCount(count+1)}>Inc</button>
 <button onClick={()=>{if(count>0){setCount(count-1)}}}>Dec</button>
 <button onClick={()=>{setCount(count*2)}}>Double</button>
 <button onClick={()=>setCount(count===0)}>Reset</button>
    </div>
  )
}

export default Counter