import React from "react";
import { Route, Routes } from "react-router-dom";
import Error404 from "../404Error/404Error";
import About from "../About/About";
import Clothes from "../Clothes/Clothes";
import Contact from "../Contact/Contact";
import Electronics from "../Electronics/Electronics";
import Faq from "../Faq/Faq";
import Footwere from "../Footwere/Footwere";
import Grocery from "../Grocery/Grocery";
import Home from "../Home/Home";

const AllRoutes = () => {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Home />}>
    
        </Route>
        <Route path="/electronics" element={<Electronics />}>
         
        </Route>
        <Route path="/clothes" element={<Clothes />}>
       
        </Route>
        <Route path="/grocery" element={<Grocery />}>
    
        </Route>
        <Route path="/footwere" element={<Footwere />}>
      
        </Route> 
         <Route path="/faq" element={<Faq />}>
      
        </Route><Route path="/AboutUs" element={<About/> }>
      
        </Route><Route path="/contactUs" element={<Contact />}>
      
        </Route> 
        <Route path="*" element={<Error404/>}>
      
        </Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
