import './App.css';
import React, { useContext } from 'react';
import Navbar from '../src/components/Navbar'
import Body from './components/Body';
import { ThemeContext } from './context/ThemeContext';
// import { CartProvider } from './context/CartContext';
function App() {
  const{isLight}=useContext(ThemeContext)
  return (
    <div className={`App ${isLight?"Light":"Dark"}`}>

     <Navbar></Navbar>
     <Body></Body>

      
    </div>
  );
}

export default App;
