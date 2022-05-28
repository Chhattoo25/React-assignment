import React from "react";
import './form.css'
const FormView = ({value}) => {
                     console.log(value)
  return (
    <>
      <tr>
        <td> {value.name} </td>
        <td> {value.age} </td>
        <td> {value.address} </td>
        <td> {value.department} </td>
        <td> {value.salary} </td>
        {value.marital ? <td>Married</td> : <td>Not Married</td>}
      </tr>
    </>
  );
};

export default FormView;
