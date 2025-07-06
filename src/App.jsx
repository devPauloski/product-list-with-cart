import { useState } from "react";
import Wrapper from "./components/Wrapper.jsx";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart.jsx";
import Order from "./components/Order.jsx";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Wrapper>
      <Products />
      <Cart />
      <Order />
    </Wrapper>
  );
}

