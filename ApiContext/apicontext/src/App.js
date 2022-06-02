import './App.css';
import React, { useContext } from 'react';
import Navbar from '../src/components/Navbar'
import Body from './components/Body';
import { ThemeContext } from './context/ThemeContext';
import Product from './components/Product';
import { CartProvider } from './context/CartContext';
// import LoginForm from './Forms/LoginForm';
// import Token from './Forms/Token';
function App() {
  const{isLight}=useContext(ThemeContext)
  return (
    <div className={`App ${isLight?"Light":"Dark"}`}>
<CartProvider>

<Navbar></Navbar>
<Body></Body>
<Product/>

</CartProvider>

{/* 
<LoginForm></LoginForm>
<Token></Token> */}

      
    </div>
  );
}

export default App;
