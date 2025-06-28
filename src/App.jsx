import { useState } from "react";
import "./App.css";
import Product from "./components/Product.jsx";
import Cart from "./components/Cart.jsx";
import Order from "./components/Order.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <main className="max-w-[30rem] md:max-w-[76.25rem] mx-auto w-[90%] grid my-[1.875rem] md:grid-cols-[1fr_30%] gap-7">
      <Product />
      <Cart />
      <Order />
    </main>
  )
}

export default App
