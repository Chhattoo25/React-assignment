import React from 'react'
 import { Appcontext } from '../context/AppContext'

const Token = () => {
  const {isAuth,token}=React.useContext(Appcontext)
  return (
    <div>{isAuth? `Token:- ${token}` : `user has not logged in`}</div>
  )
}

export default Token