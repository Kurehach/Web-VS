import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";

import Wishlist
from "./pages/Wishlist/Wishlist";

import Login
from "./pages/Login/Login";

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    
  );
}

export default RoutesConfig;