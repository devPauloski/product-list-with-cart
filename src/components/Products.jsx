import data from "../data.json";
import AddToCartIcon from "../assets/icons/icon-add-to-cart.svg?react";
import IncrementQuantityIcon from "../assets/icons/icon-increment-quantity.svg?react";
import DecrementQuantityIcon from "../assets/icons/icon-decrement-quantity.svg?react";

function ProductList({ addToCart, isItemInCart, decreaseQuantity, increaseQuantity }) {
  const products = data.map((item) => {
    return (
      <li key={item.id}>
        <picture>
          <source srcSet={item.image.desktop} media="(min-width: 64em)" />
          <source srcSet={item.image.tablet} media="(min-width: 48em)" />
          <img
            style={{
              border: isItemInCart(item.id) && "2px solid hsl(14, 86%, 42%)",
            }}
            src={item.image.mobile}
            alt={item.name}
            className="rounded-xl"
          />
        </picture>
        {!isItemInCart(item.id) ? (
          <button
            onClick={() => addToCart(item)}
            className="relative left-2/4 flex h-[2.75rem] w-full max-w-[10rem] -translate-x-2/4 -translate-y-2/4 cursor-pointer items-center justify-center gap-2 rounded-full border-1 border-rose-400 bg-rose-50 text-rose-900 hover:border-red hover:text-red"
          >
            <AddToCartIcon />
            <span className="font-medium">Add to cart</span>
          </button>
        ) : (
          <div className="relative left-2/4 flex h-[2.75rem] w-full max-w-[10rem] -translate-x-2/4 -translate-y-2/4 items-center justify-between gap-4 rounded-full bg-red px-4">
            <button
              onClick={() => decreaseQuantity(item.id)}
              className="flex cursor-pointer items-center justify-center"
              aria-label="Decrease quantity"
            >
              <DecrementQuantityIcon className="h-4 w-4 rounded-full border-1 border-rose-50 fill-rose-50 p-0.5 hover:bg-rose-50 hover:fill-red" />
            </button>
            <span aria-label="Quantity" className="font-medium text-rose-50">
              {isItemInCart(item.id).quantity}
            </span>
            <button
              onClick={() => increaseQuantity(item.id)}
              className="flex cursor-pointer items-center justify-center"
              aria-label="Increase quantity"
            >
              <IncrementQuantityIcon className="h-4 w-4 rounded-full border-1 border-rose-50 fill-rose-50 p-0.5 hover:bg-rose-50 hover:fill-red" />
            </button>
          </div>
        )}

        <p className="mb-1 text-sm text-rose-500">{item.category}</p>
        <h2 className="mb-1 font-medium text-rose-900">{item.name}</h2>
        <p className="font-medium text-red">${item.price}</p>
      </li>
    );
  });

  return (
    <ul className="grid gap-6 md:grid-cols-2 md:gap-5 md:gap-y-9 lg:grid-cols-3">
      {products}
    </ul>
  );
}

export default function Products({ addToCart, isItemInCart, decreaseQuantity, increaseQuantity }) {
  return (
    <section>
      <h1 className="mb-9 text-[2rem] leading-tight font-bold">Desserts</h1>
      <ProductList
        addToCart={addToCart}
        isItemInCart={isItemInCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
      />
    </section>
  );
}
