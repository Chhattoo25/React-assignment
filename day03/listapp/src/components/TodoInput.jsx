import React from "react";
import { useState } from "react";
// import TodoList from "./TodoList";
import styles from './todoinput.css'
const TodoInput = ({addTodo}) => {
  const [value, setValue] =useState("");
  // const addTodo = (newTodo) => {
  //   setVlaue(...TodoList, newTodo);
  // };
  return (
    <div className={styles.border}>
      <input
        type="text"
        value={value}
        placeholder="new todo item"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <button 
       disabled ={!value}
      onClick={()=>{
       
        addTodo(value)
      setValue('')}}>Add</button>
    </div>
  );
};

export default TodoInput;
