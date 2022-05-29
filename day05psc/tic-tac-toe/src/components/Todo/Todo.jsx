import React, { useState, useEffect } from "react";
import "./todo.css";

const getLocalData = () => {
  const list = localStorage.getItem("mytodolist");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
const Todo = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEdited, setIsEdited] = useState("");
  const [toggleBtn, setToggleBtn] = useState(false);
  //add item
  const addItem = () => {
    if (!input) {
      alert("please fill the data");
    } 
    else if(input&& toggleBtn){
setItems(items.map((item)=>{
if(item.id===isEdited){
  return {...item,name:input}
}
return item
}))
setIsEdited("");
setInput("");
setToggleBtn(false);

    }
    else {
      const myNewInput = {
        id: new Date().getTime().toString(),
        name: input,
      };
      setItems([...items, myNewInput]);
      setInput("");
    }
  };

  // Edit the data

  const editItem = (ind) => {
    const edit_item = items.find((item) => {
      return item.id === ind;
    });
    setIsEdited(ind);
    setInput(edit_item.name);
    setToggleBtn(true);
  };

  //delete item
  const deleteItem = (ind) => {
    const updatedItem = items.filter((item) => {
      return item.id !== ind;
    });
    setItems(updatedItem);
  };

  //remove all items
  const removeAll = () => {
    setItems([]);
  };

  //Adding in localstorage
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items]);
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todoimg" />
            <figcaption>Add Your Todo List 🤷‍♂️</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="📝Add Items"
              className="form-control"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
            {toggleBtn ? (
              <i
                className="fa fa-edit add-btn"
                onClick= {addItem}
              ></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addItem}></i>
            )}
          </div>
          <div className="showItems">
            {items.map((item) => {
              return (
                <div className="eachItem" key={item.id}>
                  <h3>{item.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="fa fa-edit add-btn"
                      onClick={() => editItem(item.id)}
                    ></i>
                    <i
                      className="fa fa-trash-alt add-btn"
                      onClick={() => deleteItem(item.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>REMOVE ALL </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;

