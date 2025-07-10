import EmptyCartIcon from "../assets/icons/illustration-empty-cart.svg?react";
import DeleteIcon from "../assets/icons/icon-remove-item.svg?react";
import CarbonNeutralIcon from "../assets/icons/icon-carbon-neutral.svg?react";

export default function Cart({ cartItems, deleteCartItem, totalAmount, setIsOrderConfirmed }) {
  function totalQuantity() {
    let total = 0;
    for (const item of cartItems) {
      total = total + item.quantity;
    }
    return total;
  }

  return (
    <section className="sticky top-[1.875rem] h-fit rounded-xl bg-white p-5 shadow-xl">
      <h2 className="mb-2 text-2xl leading-tight font-bold text-red">
        Your Cart ({totalQuantity()})
      </h2>
      {cartItems.length === 0 ? (
        <div className="grid place-items-center pt-6 pb-14">
          <EmptyCartIcon className="mb-3" />
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
                  className="flex flex-wrap items-center justify-between gap-2 border-b-1 border-solid border-b-rose-100 py-4"
                >
                  <div>
                    <h3 className="text-sm font-bold text-rose-900">
                      {item.name}
                    </h3>
                    <div className="flex">
                      <p className="mr-3 font-bold text-red">
                        {item.quantity}x
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
                    className="flex cursor-pointer items-center justify-center"
                  >
                    <DeleteIcon className="h-4.5 w-4.5 rounded-full border-2 border-rose-400 bg-rose-50 fill-rose-400 p-0.5 hover:border-rose-900 hover:fill-rose-900" />
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="my-5 flex flex-wrap items-center justify-between text-rose-900">
            <p>Order Total</p>
            <p className="text-2xl font-bold">${totalAmount().toFixed(2)}</p>
          </div>
          <div className="mb-6 flex flex-wrap items-center justify-center gap-1 rounded-[.5rem] bg-rose-100 py-4 text-sm">
            <CarbonNeutralIcon />
            <p>
              This is a <span className="font-bold">carbon neutral</span>{" "}
              delivery
            </p>
          </div>
          <button
             onClick={( ) => setIsOrderConfirmed(true)}
             className="w-full cursor-pointer rounded-full bg-red py-4 font-medium text-rose-50 hover:bg-red-100">
            Confirm Order
          </button>
        </div>
      )}
    </section>
  );
}
