import React,{Children, createContext} from "react";
import{useState} from "react"
export  const CartContext =createContext()

export const CartProvider =({children})=>{
const[count,setCount]= useState(0)

return <CartContext.Provider>{Children}</CartContext.Provider>
}