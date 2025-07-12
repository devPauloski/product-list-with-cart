import OrderConfirmedIcon from "../assets/icons/icon-order-confirmed.svg?react";

export default function Order({
  cartItems,
  isOrderConfirmed,
  startNewOrder,
  totalAmount,
}) {
  return (
    <>
      {isOrderConfirmed && (
        <section className="fixed top-0 left-0 z-1 h-full w-full overflow-auto bg-overlay md:place-content-center">
          <div className="mx-auto max-w-[37.125rem] rounded-xl bg-rose-50 px-[5%] pt-10 pb-6 max-md:mt-24 md:p-9">
            <OrderConfirmedIcon className="mb-8" />
            <h2 className="mb-4 text-4xl font-bold text-rose-900 max-md:max-w-[10ch]">
              Order Confirmed
            </h2>
            <p className="mb-6 text-rose-400">We hope you enjoy your food!</p>
            <div className="mb-7.5 rounded-lg bg-rose-100 p-5.5">
              <ul>
                {cartItems.map((item) => {
                  return (
                    <li
                      className="flex items-center justify-between gap-2 border-b border-rose-300 py-4"
                      key={item.id}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          className="h-12 w-12 rounded-sm"
                          src={item.image.thumbnail}
                          alt={item.name}
                        />
                        <div>
                          <h3 className="text-sm font-bold">{item.name}</h3>
                          <div className="flex">
                            <p className="mr-4 font-medium text-red">
                              {item.quantity}x
                            </p>
                            <p className="font-medium text-rose-500">
                              &#64;${item.price}
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-4 flex items-center justify-between">
                <p className="font-medium">Order Total</p>
                <p className="text-2xl font-bold">
                  ${totalAmount().toFixed(2)}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                startNewOrder();
              }}
              className="flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-red px-4 font-medium text-rose-50 hover:bg-red-100 focus-visible:border-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-900"
            >
              Start New Order
            </button>
          </div>
        </section>
      )}
    </>
  );
}
