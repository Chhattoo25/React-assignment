
import './App.css';
import Navbar from './comp/Nav';
import Feeds from './pages/feeds';
import Login from './pages/Login';
import Home from "./pages/Home";
import Posts from './pages/Posts';
import { RequiredAuth } from './hoc/RequiredAuth';
// import Home from './components/Home';
// import Products from './components/Product';
// import Product from './components/Products';
// import About from './components/About';
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
     <Navbar/>
      {/* <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route path="/products/*" element={<Products/>}></Route>
<Route path="id:name" element={<Product/>}></Route>

 
      </Routes> */}

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/feeds' element={ <RequiredAuth><Feeds/></RequiredAuth>}></Route>
        <Route path='/posts' element={ <RequiredAuth><Posts/></RequiredAuth>}></Route>
        <Route path='/login' element={<Login/>}></Route>
       
      </Routes>
   

    </div>
  );
}

export default App;
