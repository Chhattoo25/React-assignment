import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Product';
import Product from './components/Products';
import About from './components/About';
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
     <Navbar/>
      <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route path="/products/*" element={<Products/>}></Route>
<Route path="id:name" element={<Product/>}></Route>

 
      </Routes>
     {/* <Home/>
     <About/>
     <Products></Products> */}

    </div>
  );
}

export default App;
