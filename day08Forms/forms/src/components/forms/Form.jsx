import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    let { type, checked, name, value, files } = e.target;
    console.log(type, name, value, checked);
    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else if (type === "file") {
      setForm({
        ...form,
        [name]: files,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Name.."
            value={form.username}
            onChange={handleOnChange}
          ></input>
        </div>

        <div>
          <label htmlFor="">Age:</label>
          <input
            type="text"
            name="age"
            placeholder="Enter Age.."
            value={form.age}
            onChange={handleOnChange}
          ></input>
        </div>

        <div>
          <label htmlFor="">Email:</label>
          <input
            type="text"
            name="email"
            placeholder="Enter Email.."
            value={form.email}
            onChange={handleOnChange}
          ></input>
        </div>

        <div>
          <label htmlFor="">Password:</label>
          <input
            type="text"
            name="password"
            placeholder="Enter Password.."
            value={form.password}
            onChange={handleOnChange}
          ></input>
        </div>

        <div>
          <label htmlFor="">City</label>
          <select name="city" onChange={handleOnChange}>
            <option value="delhi">Delhi</option>
            <option value="Punjab">Punjab</option>
            <option value="Indore">Indore</option>
            <option value="Bengaluru">Bengaluru</option>
          </select>
        </div>

        <div>
          <label htmlFor="">Is Indian:</label>
          <input
            type="checkbox"
            name="isIndian"
            check={form.isIndian}
            onChange={handleOnChange}
          ></input>
        </div>

        <div>
          <label htmlFor="">Male:</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleOnChange}
          ></input>
        </div>

        <div>
          <label htmlFor="">Female:</label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleOnChange}
          ></input>
        </div>

        <div>
          <label htmlFor="">Resume:</label>
          <input
            type="file"
            name="resume"
            accept="image/png,image/jpeg"
            files={form.resume}
            onChange={handleOnChange}
          ></input>
        </div>

        <button type="submit">Submit</button>
      </form>

     
    </div>
  );
};

export default Form;
