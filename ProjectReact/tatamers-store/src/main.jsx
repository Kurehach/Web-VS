import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import App from "./App";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <WishlistProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WishlistProvider>
  </CartProvider>
);