import React, { useEffect, useState, axios } from "react";
import { useParams, Link } from "react-router-dom";
const Products = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios({
      url: "http://localhost:8080/data",
      method: "get",
    }).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div id="ProductList">
      <h1> Product List</h1>
      <table>
        <tbody>
          {data
            ? data.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>

                    <td>{item.price}</td>
                    <td>
                      <Link to={`${item.id}`}>more details..</Link>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
