import "./App.css";
import Product from "./components/Product.jsx";
import Cart from "./components/Cart.jsx";
import Order from "./components/Order.jsx";

function App() {
  return (
    <main className="max-w-[30rem] md:max-w-[76.25rem] mx-auto w-[90%] md:w-[94%] grid my-[1.875rem] md:grid-cols-[1fr_minmax(18.25rem,30%)] gap-6">
      <Product />
      <Cart />
      <Order />
    </main>
  )
}

export default App
