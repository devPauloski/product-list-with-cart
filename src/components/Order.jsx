import OrderConfirmedIcon from "../assets/icons/icon-order-confirmed.svg?react";

export default function Order({ cartItems, isOrderConfirmed }) {
  if (!isOrderConfirmed) {
    return null;
  } else {
    return (
      <section className="fixed top-0 left-0 z-1 h-full w-full bg-overlay md:place-content-center">
        <div className="mx-auto max-w-[37.125rem] rounded-xl bg-white px-6 pt-10 pb-6 max-md:mt-24">
          <OrderConfirmedIcon className="mb-8" />
          <h2 className="mb-4 text-4xl font-bold text-rose-900 max-md:max-w-[10ch]">
            Order Confirmed
          </h2>
          <p className="mb-6 text-rose-400">We hope you enjoy your food!</p>
          <ul>
            {cartItems.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      </section>
    );
  }
}
