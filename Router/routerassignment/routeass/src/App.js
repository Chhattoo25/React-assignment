
import './App.css';
import{Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Productitem from './pages/Productitem';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/product' element={<Productitem/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
