import React, { useEffect, useState } from "react";
// import { axios } from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import styles from "../style.module.css"
const Home = () => {
  const [product, setProduct] = useState([]);
  //   useEffect(() => {
  //     axios({ url: `http://localhost:8080/categories`, method: "GET" })
  //       .then((r) => {
  //         setProduct(r.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);
  const getData = async () => {
    let res = await fetch(`http://localhost:8080/categories`);
    let data = await res.json();
    console.log(data);
    setProduct(data)
  };
  useEffect(() => {
    getData();
  },[]);
  
  const navigate = useNavigate();
  const catselector = (category) => {
    navigate(`/categories/${category}`);
  };
  return (
    <div>
      <h1>Home</h1>
      <div className={styles.productdiv}>
        <img src="https://wallpaperaccess.com/full/2593108.png" alt="banner" />
      </div>
      {product.map((item) => (
        <div key={item.id}>
          <Link to={`/${item.catname}`}>
            <h1>{item.catname}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
