import emptyCartIcon from "../assets/icons/illustration-empty-cart.svg";
import deleteIcon from "../assets/icons/icon-remove-item.svg";

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
              <li key={item.id} className="border-b-rose-100 border-b-1 border-solid flex items-center justify-between py-4">
                <div>
                  <h3 className="font-bold text-sm text-rose-900">{item.name}</h3>
                  <div className="flex">
                    <p aria-label="Quantity" className="text-red mr-3 font-medium">{item.quantity}&times;</p>
                    <p aria-label="Unit price" className="text-rose-300 mr-2">&#64;${item.price}</p>
                    <p aria-label="Total price" className="text-rose-400 font-medium">${item.price * item.quantity}</p>
                  </div>
                </div>
                <button aria-label={`Delete cartItem - ${item.name}`}
                  className="w-4.5 h-4.5 border-2 flex items-center justify-center rounded-full border-rose-300"
                >
                  <img src={deleteIcon} alt="" />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
