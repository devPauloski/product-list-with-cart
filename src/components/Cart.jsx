import emptyCartIcon from "../assets/icons/illustration-empty-cart.svg";

export default function Cart({ cartItems }) {
  return (
    <section className="h-fit rounded-xl bg-white p-5 shadow-xl">
      <h2 className="mb-2 text-2xl leading-tight font-bold text-red">
        Your Cart ({cartItems.length})
      </h2>
      {cartItems.length === 0 ? (
        <div className="grid place-items-center pt-6 pb-14">
          <img className="mb-3" src={emptyCartIcon} alt="" />
          <p className="font-medium text-rose-500">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <ul>
          {cartItems.map((item) => {
            return (
              <li className="border-b-rose-500 border-b-1 border-solid">
                <p className="font-bold">{item.name}</p>
                <p className="font-medium">Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
