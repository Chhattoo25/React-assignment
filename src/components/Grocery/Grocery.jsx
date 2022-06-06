import React,{useState,useEffect} from 'react'

const Grocery = () => {
  const [data, setdata] = useState([]);

  const getData = async () => {
    let res = await fetch(`http://localhost:8080/categories`);
    let data = await res.json();
    setdata(data[2].subproducts);
    // setdata(data)
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      Electronics Item
      {data.map((el) => {
        return (
          <div key={el.id}>
            <img src={el.img} />
            <h1>{el.name}</h1>
            <p>{el.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Grocery