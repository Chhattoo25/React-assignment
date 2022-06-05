import React,{useState,useEffect} from 'react'

const Clothes = () => {
  const [data, setdata] = useState([]);

  const getData = async () => {
    let res = await fetch(`http://localhost:8080/categories`);
    let data = await res.json();
    setdata(data[0].subproducts);
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
}

export default Clothes