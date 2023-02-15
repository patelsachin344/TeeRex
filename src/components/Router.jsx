import { Route, Routes } from "react-router-dom";
import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/*" element></Route>
      </Routes>
    </div>
  );
};
