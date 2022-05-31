import React,{useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import Cart from './Cart'

const Product = () => {
                     const{isAuth}=useContext(AuthContext)
  return (
    <div>Product:{isAuth?"LoggedIn":"LoggedOut"}
<Cart></Cart>
    </div>
  )
}

export default Product