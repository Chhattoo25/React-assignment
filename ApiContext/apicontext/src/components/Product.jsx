import React,{useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import Cart from './Cart'

const Product = () => {
                     const{isAuth}=useContext(AuthContext)
  return (
    <div>Product
<Cart></Cart>
    </div>
  )
}

export default Product