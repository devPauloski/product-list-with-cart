import { useState } from "react";
import Wrapper from "./components/Wrapper.jsx";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart.jsx";
import Order from "./components/Order.jsx";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(productItem) {
    setCartItems((currentCartItems) => {
      return [...currentCartItems, { ...productItem, quantity: 1 }];
    });
  }

  function deleteCartItem(productItemId) {
    setCartItems(currentCartItems => {
      return currentCartItems.filter(item => item.id !== productItemId)
    });
  }

  function isItemInCart(currentCartItems, productItemId) {
    for (const item of currentCartItems) {
      if (item.id === productItemId) {
        return true;
      }
    }
    return false;
  }

  return (
    <Wrapper>
      <Products
        addToCart={addToCart}
        isItemInCart={isItemInCart}
        cartItems={cartItems}
      />
      <Cart cartItems={cartItems} deleteCartItem={deleteCartItem} />
      <Order />
    </Wrapper>
  );
}
