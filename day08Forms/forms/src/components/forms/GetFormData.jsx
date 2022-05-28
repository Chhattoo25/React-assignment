import React from 'react'
import FormView from './FormView'
import './form.css'

const GetFormData = ({data}) => {
  return (
    <div className='table-div'>
      <table className="table table-dark table-striped"
      >
        <thead>
            <tr>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Address</th>
          <th scope="col">Department</th>
          <th scope="col">salary</th>
          <th scope="col">Married</th>
          </tr>
        </thead>
        <tbody>
            {data.map((item) => { 
                return < FormView key={item.id} value={item}/>
            })}
        </tbody>
      </table>
    </div>
  )
}

export default GetFormData