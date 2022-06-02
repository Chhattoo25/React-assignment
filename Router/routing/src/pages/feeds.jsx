import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Feeds = () => {
const {isAuth}=useContext(AuthContext)
if(isAuth){
return <div>Feeds</div>

}else{
return <Navigate to="/feeds"/>
}

}

export default Feeds