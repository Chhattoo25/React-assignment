import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8081/products/${id}`)
        .then((r) => r.json())
        .then((d) => setProduct(d));
    }
  }, [id]);
  // console.log(id);
  return (
    <div>
      Products ID:{id}
      <div>{product.name}</div>
    </div>
  );
}

export default Product;
