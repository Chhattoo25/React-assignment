import React from 'react'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
const Wishlist = () => {
const {count} =useContext(CartContext)
  return (
    <div>Wishlist:{count}</div>
  )
}

export default Wishlist