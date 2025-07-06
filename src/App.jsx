import { useState } from "react";
import Product from "./components/Product.jsx";
import Cart from "./components/Cart.jsx";
import Order from "./components/Order.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <main className="mx-auto my-[1.875rem] grid w-[90%] max-w-[30rem] gap-6 md:w-[94%] md:max-w-[76.25rem] md:grid-cols-[1fr_minmax(18.25rem,30%)]">
      <Product />
      <Cart />
      <Order />
    </main>
  );
}

export default App;
