import React from 'react'
import { Child1 } from './Child1'
import Child2 from './Child2'

const Parent = () => {
  // let [value,setValue]= React.useState("")

// const [childValue,setChildValue]= React.useState("")
const[info,setInfo]=React.useState("")

 
  return (
    <div>
      {/* <input onChange={(e)=>setValue(e.target.value)}></input>
      Parent:{value} */}

<Child1 info={info} setInfo={setInfo} ></Child1>
<Child2 info={info}></Child2>
<h1>Child1 to parent: {info}</h1>
    </div>
  )
}

export default Parent