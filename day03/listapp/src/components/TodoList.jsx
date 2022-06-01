import React from 'react'
import Todoitem from './Todoitem'
const TodoList = ({todos,deleteTodo}) => {
  return (
    <div>
      <h3>Here Is Your Todo List</h3>

      <ul>
        {todos.map((todo)=>(
      <Todoitem key={todo.id} value={todo.value} deleteTodo={deleteTodo}></Todoitem>        ))}
      </ul>
    </div>
  )
}

export default TodoList