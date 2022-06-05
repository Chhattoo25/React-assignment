import axios from "axios";
import React, { useEffect, useState } from "react";

const Electronics = () => {
  const [data, setdata] = useState([]);

  const getData = async () => {
    let res = await fetch(`http://localhost:8080/categories`);
    let data = await res.json();
    setdata(data[1].subproducts);
    // setdata(data)
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      Electronics
      {data.map((el) => {
        return (
          <div>
            <img src={el.img} />
            <h1>{el.name}</h1>
            <p>{el.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Electronics;
