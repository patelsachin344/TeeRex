import { useEffect, useState } from "react";

export const Card = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch(
      // "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json#/"
      "http://localhost:5000/api/products"
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  };
  // console.log(data);

  const handleCart = (id) => {
    console.log(id);
    let productId = {
      userId: id,
    };
    fetch("http://localhost:5000/api/carts", {
      method: "POST",
      body: JSON.stringify(productId),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "50%",
          margin: "auto",
          padding: "1rem",
        }}
      >
        <input />
        <button>Search</button>
      </div>
      <div
        className="Card"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4 ,1fr)",
          gap: "1rem",
          p: "1rem",
          textAlign: "center",
        }}
      >
        {data &&
          data.map((item) => (
            <div
              key={item._id}
              style={{ border: "1px solid black", boxShadow: "1rem" }}
            >
              <img src={item.img} height="250px" />
              <div>{item.title}</div>
              <div>{item.price}</div>
              <button m="1rem" onClick={() => handleCart(item._id)}>
                Add To Cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};
