import emptyCartIcon from "../assets/icons/illustration-empty-cart.svg";
import deleteIcon from "../assets/icons/icon-remove-item.svg";
import carbonNeutralIcon from "../assets/icons/icon-carbon-neutral.svg";

export default function Cart({ cartItems, deleteCartItem, totalAmount }) {
  return (
    <section className="h-fit rounded-xl bg-white p-5 shadow-xl sticky top-[1.875rem]">
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
        <div>
          <ul>
            {cartItems.map((item) => {
              return (
                <li
                  key={item.id}
                  className="flex items-center justify-between border-b-1 border-solid border-b-rose-100 py-4 gap-2 flex-wrap"
                >
                  <div>
                    <h3 className="text-sm font-bold text-rose-900">
                      {item.name}
                    </h3>
                    <div className="flex">
                      <p className="mr-3 font-bold text-red">
                        {item.quantity}&times;
                      </p>
                      <p className="mr-2 text-rose-500">&#64;${item.price}</p>
                      <p className="font-medium text-rose-500">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteCartItem(item.id)}
                    aria-label={`Delete cartItem - ${item.name}`}
                    className="flex h-4.5 w-4.5 items-center justify-center rounded-full border-2 border-rose-300 cursor-pointer"
                  >
                    <img src={deleteIcon} alt="" />
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center justify-between my-5 flex-wrap text-rose-900">
            <p>Order Total</p>
            <p className="font-bold text-2xl">${totalAmount().toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-center py-4 bg-rose-100 text-sm gap-1 mb-4 rounded-sm flex-wrap">
            <img src={carbonNeutralIcon} alt="" />
            <p>This is a <span className="font-bold">carbon neutral</span> delivery</p>
          </div>
          <button className="bg-red w-full py-4 text-rose-50 rounded-full cursor-pointer font-medium">
            Confirm Order
          </button>
        </div>
      )}
    </section>
  );
}
