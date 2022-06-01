import React,{useState} from 'react'
import TodoInput from './TodoInput'
// import Todoitem from './Todoitem'
import TodoList from './TodoList'
import {v4 as uuidv4} from 'uuid'
const TodoApp = () => {
  const [todos,setTodos]= useState([])
  const addTodo =(newTodo)=>{
    // todos.push(newTodo)
    setTodos([...todos,{
      id:uuidv4(),
      value:newTodo
    }])
  }
  const deleteTodo =(id)=>{
    setTodos(todos.filter((todo)=>todo.id!==id))
  }
  return (
    <div>TodoApp
      <TodoInput addTodo={addTodo}></TodoInput>
    {/* <TodoList >{
todos.map((todo)=>{
 return  <Todoitem key={todo.id} value={todo.value} deleteTodo={deleteTodo}></Todoitem>
})}</TodoList > */}


<TodoList todos={todos} deleteTodo={deleteTodo}></TodoList>

    </div>
  )
}

export default TodoApp