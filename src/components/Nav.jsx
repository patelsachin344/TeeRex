import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        borderSpacing: "1rem",
        padding: "1.5rem",
      }}
      display="flex"
      padding="1.5rem"
      bg="blue.300"
    >
      <div>
        <Link
          style={{ textDecoration: "none", color: "black", fontWeight: "600" }}
        >
          TeeRex Store
        </Link>
      </div>
      <div
        style={{
          marginLeft: "80%",
          borderSpacing: "1rem",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "600",
            marginRight: "1rem",
          }}
        >
          Products
        </Link>
        <Link
          to="/cart"
          style={{ textDecoration: "none", color: "black", fontWeight: "600" }}
        >
          Cart
        </Link>
      </div>
    </div>
  );
};
