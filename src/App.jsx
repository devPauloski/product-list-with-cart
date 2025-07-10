import { useState, useEffect } from "react";
import Wrapper from "./components/Wrapper.jsx";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart.jsx";
import Order from "./components/Order.jsx";

export default function App() {
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    const savedValue = localStorage.getItem("ITEMS");

    if (savedValue === null) {
      return []
    } else {
      return JSON.parse(savedValue)
    }
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(cartItems))
  }, [cartItems])

  function addToCart(productItem) {
    setCartItems((currentCartItems) => {
      return [...currentCartItems, { ...productItem, quantity: 1 }];
    });
  }

  function increaseQuantity(productItemId) {
    setCartItems((currentCartItems) => {
      return currentCartItems.map((item) =>
        item.id === productItemId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    });
  }

  function decreaseQuantity(productItemId) {
    setCartItems((currentCartItems) => {
      return currentCartItems
        .map((item) =>
          item.id === productItemId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0);
    });
  }

  function deleteCartItem(productItemId) {
    setCartItems((currentCartItems) => {
      return currentCartItems.filter((item) => item.id !== productItemId);
    });
  }

  function isItemInCart(productItemId) {
    return cartItems.find((item) => item.id === productItemId);
  }

  function totalAmount() {
    let total = 0;
    for (let item of cartItems) {
      total = total + item.quantity * item.price;
    }
    return total;
  }

  function startNewOrder() {
    setCartItems([]);
    setIsOrderConfirmed(false);
  }

  return (
    <Wrapper>
      <Products
        addToCart={addToCart}
        isItemInCart={isItemInCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
      />
      <Cart
        cartItems={cartItems}
        deleteCartItem={deleteCartItem}
        totalAmount={totalAmount}
        setIsOrderConfirmed={setIsOrderConfirmed}
      />
      <Order
        cartItems={cartItems}
        isOrderConfirmed={isOrderConfirmed}
        startNewOrder={startNewOrder}
        totalAmount={totalAmount}
      />
    </Wrapper>
  );
}
