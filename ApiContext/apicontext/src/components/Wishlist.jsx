import React from 'react'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
const Wishlist = () => {
const value =useContext(CartContext)
  return (
    <div>Wishlist:{value}</div>
  )
}

export default Wishlist