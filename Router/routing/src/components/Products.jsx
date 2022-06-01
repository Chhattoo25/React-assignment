import React, { useEffect,useState } from "react";
import { Outlet } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      let r = await fetch("http://localhost:8080/products");
      let d = await r.json()
      setProducts(d);
       
    
    };
    fetchProducts();
  }, []);
  return (
    <div>
      product
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
    <div>                       
      {products.map((p) => {
        <div key={p.id}>
          <link to={`/products/${p.id}`}>{p.name}</link>
          <Outlet/>
        </div>;
      })}
      </div>    
    </div>
    </div>
  );
};

export default Products;
