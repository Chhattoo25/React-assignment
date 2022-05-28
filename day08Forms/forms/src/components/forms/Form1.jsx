import React, { useState, useEffect } from "react";

import GetFormData from "./GetFormData";

const Form1 = () => {
  const [formData, setFormData] = useState({
   
  });
  const [fetchdata,setFetchData]= useState([])


  // handle when value change in input
  const handleOnChange=(e)=>{
    let{type,checked,name,files,value}=e.target

if(type==="checkbox"){
  setFormData({...formData,[name]:checked})
}
else if(type==="file"){
  setFormData({...formData,[name]:files})
}
else{
  setFormData({...formData,[name]:value})
}
  }

  //get data from server

  const getData  = async()=>{
    try{
      let res = await fetch("http://localhost:8080/form_Data")
      let data = await res.json();
      console.log(data)
      setFetchData(data)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getData();
  },[])

  const postData = async(values)=>{
    try{
      let res = await fetch("http://localhost:8080/form_Data",{
        method:"POST",
        headers:{
          "content-type":"application/json",
        },
        body:JSON.stringify(values)
      });

    }
    catch(err){
      console.log(err)
    }
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    postData(formData);
    setFormData({
      name: "",
      age: "",
      address: "",
      department: "",
      salary: "",
      maritial: false,
    });
    setFetchData([...fetchdata, formData]);
  };


  return <div className="container">
    <form onSubmit={handleOnSubmit}>
 <div className="input_div">
<label>Name:</label>
<input 
type="text"
name="name"
value = {formData.name}
placholder="enter name"
onChange = {handleOnChange}
required></input>

 </div>

  <div className="input_div">
<label>Age:</label>
<input 
type="number"
name="age"
value = {formData.age}
placholder="enter age"
onChange = {handleOnChange}
required></input>

 </div> 
 
 <div className="input_div">
<label>Address:</label>
<input 
type="text"
name="address"
value = {formData.address}
placholder="enter address details"
onChange = {handleOnChange}
required></input>

 </div> 
 <div className="input_div">
<label>Department:</label>
<select name="department" onChange={handleOnChange} value={formData.department}>
  <option value="Food">Food</option>
  <option value="Agriculture">Agriculture</option>
  <option value="Electrician">Electric</option>
  <option value="Railway">Railway</option>
</select>

 </div> <div className="input_div">
<label>Salary:</label>
<input 
type="number"
name="salary"
value = {formData.salary}
placholder="enter name"
onChange = {handleOnChange}
required></input>

 </div>
 <div className="input_div">
<label>Marital status:</label>
<input 
type="checkbox"
name="marital"
value = {formData.marital}
onChange = {handleOnChange}
></input>

 </div>
 <div className="input_div">
          <label htmlFor="">Resume:</label>
          <input
            type="file"
            name="resume"
            accept="image/png,image/jpeg"
            files={formData.resume}
            onChange={handleOnChange}
          ></input>
        </div>
 <div className="submitform">
   <input type="submit"></input>
 </div>


    </form>
    <GetFormData data={fetchdata}></GetFormData>

  </div>;
};

export default Form1;
