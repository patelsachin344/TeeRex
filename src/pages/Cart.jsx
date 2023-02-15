import { useEffect, useState } from "react";

export const Cart = () => {
  const [data, setData] = useState();
  const [que, setQue] = useState(0);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch("http://localhost:5000/api/carts")
      .then((res) => res.json())
      .then((res) => setData(res));
  };
  console.log(data);
  return (
    <div>
      <div
        className="Card"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        {data &&
          data.map((item) => (
            <div
              key={item._id}
              style={{
                border: "1px solid black",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                padding: "1rem",
              }}
            >
              <img src={item.img} height="150px" />
              <div>{item.title}</div>
              <div>{item.price}</div>
              <div>
                <button onClick={() => setQue(que + 1)}>+</button>
                <div>{que}</div>
                <button disabled={que === 0} onClick={() => setQue(que - 1)}>
                  -
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
