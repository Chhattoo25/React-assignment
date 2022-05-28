import React, { useEffect } from "react";
import { useState } from "react";
// import { useEffect } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setnewTodo] = useState("");

  const saveInfo = () => {
    fetch(`http://localhost:3004/todos`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        value: newTodo,
        isCompleted: false,
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        todos.push(d);
        setTodos([...todos, d]);
        setnewTodo("")
      });
  };
  useEffect(() => {
    fetch(`  http://localhost:3004/todos`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodos(data);
      });
  }, []);


 
  return (
    <div>
      Todo
      <div>
        <input value={newTodo} onChange={({target})=>setnewTodo(target.value)}></input>
        <button onClick={saveInfo}>+</button>
        <div>
          {todos.map((todo) => {
          return  <div key={todo.id}>{todo.value}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
