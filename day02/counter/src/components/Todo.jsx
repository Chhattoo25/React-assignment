import React, {useState} from 'react'

import styles from './Todo.module.css'
import TodoItem from './TodoItem'
const Todo = () => {
let [value,setValue]=useState('ABCD')
const [todos,setTodos]=useState([])
// const handlechange =(e)=>{
//   console.log(e.target.value)
// }

const onDelete =(id)=>{
let newTodos =todos.filter((todo)=>todo.id !==id

)
setTodos(newTodos)
}
  return (
    <div>
      <h3>Todo List</h3>

<input value={value} onChange={(e)=>
     setValue(e.target.value)
} >
0*9+
+
327,8./9+_</input>
<button onClick={()=>{
setTodos([...todos,{id:Date.now(),value:value}]);
setValue("")
}}>Add</button>

<div className={styles.todoList}>
{todos.map((todo)=>{
    return <TodoItem key={todo.id} todo={todo} onDelete={onDelete}/>

})}

</div>
    </div>
  )
}

export default Todo