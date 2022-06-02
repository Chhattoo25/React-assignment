import React from 'react'
import { Appcontext } from '../context/AppContext'
import {Form} from "./Form"
const LoginForm = () => {
  const{login}=React.useContext(Appcontext)
  const[username,setUsername]=React.useState("")
  const onSubmit = (e)=>{
    e.preventDefault()
   login(username)
  }
  return (
    <Form onSubmit={onSubmit} title="Login">
      <input 
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
      placeholder="enter name"
      />
    </Form>
  )
}

export default LoginForm