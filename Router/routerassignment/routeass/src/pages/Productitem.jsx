import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Productitem = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

 
  useEffect(() => {
      axios({
          url: "http://localhost:8080/data",
          method: "GET",
          params: {
              id:id
          }
      }).then((item) => { setProduct(item.data[0])});
  }, []);
  return (
      <div id="productDeatails">
          {product ? <>
          
          <h1> {product.name} Details.</h1>
              <h3>{product.id}: {product.name}</h3>   
              <h4>Brand:{product.brand}</h4>
              <h4>Price: {product.price}</h4></>:<h3>Product does not exits.</h3>}
      </div>
  )
};

export default Productitem;
