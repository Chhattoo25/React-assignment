import React, { useState } from "react";
import styles from "./Todo.module.css";
const TodoItem = ({ todo,onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  return (
    <div className={styles.todo} key={todo.id}>
                         
      <input className={styles.inp}
        type="checkbox"
        checked={isCompleted}
        onChange={(e) => {
          setIsCompleted(e.target.checked);
        }}
      />
      <div className={isCompleted ? styles.striked:""}>{todo.value}</div>
      <button onClick={()=>onDelete(todo.id)} className={styles.btn}>Delete</button>
    </div>
  );
};

export default TodoItem;
