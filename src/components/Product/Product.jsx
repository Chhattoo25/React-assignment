import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Product = () => {
  const { categry } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8080/categories/?catname=${categry}`)
      .then((r) => setProduct(r.data));
      console.log(r.data.subproducts)
  }, [categry]);
  console.log(Product);

  //   product.subproducts.map((elem) => console.log("eleme", elem));

  return (
    <div>
      <h1>{product.catname}</h1>

      {product.subproducts.map((elem) => (
            <h3 key={elem.id}>{elem.name}</h3>
        ))}
    </div>
  );
};

export default Product;