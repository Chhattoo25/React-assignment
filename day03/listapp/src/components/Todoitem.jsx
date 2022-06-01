import React from 'react'

const Todoitem = ({todo,value,deleteTodo}) => {
  
  return (
<li>{value}
<button onClick={()=>deleteTodo(todo)}>Delete</button>
</li> 
 )
}

export default Todoitem