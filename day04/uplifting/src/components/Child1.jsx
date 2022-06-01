import React, { useState } from 'react'

const Child1 = (prop) => {
  const [value,setValue]=useState(prop.info)

  const onHandleChange =(e)=>{
    let newValue = e.target.value;
    // setValue(newValue)
    prop.setInfo(newValue)
  }
  return (
    <div> 

      <input type="[text]" onChange={onHandleChange} />

      {/* parent to child ==> */}
    {/* <h3>Child1:  {prop.setValue} {prop.info}  </h3> */}
    <span>Information:{prop.info}</span>
    </div>
  )
}

export  {Child1}