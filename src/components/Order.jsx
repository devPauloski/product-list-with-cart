import OrderConfirmedIcon from "../assets/icons/icon-order-confirmed.svg?react";

export default function Order({ cartItems, isOrderConfirmed, startNewOrder, totalAmount }) {
  return (
    <>
      {isOrderConfirmed && (
        <section className="fixed top-0 left-0 z-1 h-full w-full bg-overlay md:place-content-center overflow-auto">
          <div className="mx-auto max-w-[37.125rem] rounded-xl bg-rose-50 px-[5%] pt-10 pb-6 max-md:mt-24 md:p-9">
            <OrderConfirmedIcon className="mb-8" />
            <h2 className="mb-4 text-4xl font-bold text-rose-900 max-md:max-w-[10ch]">
              Order Confirmed
            </h2>
            <p className="mb-6 text-rose-400">We hope you enjoy your food!</p>
            <div className="rounded-lg bg-rose-100 p-5.5 mb-7.5">
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
              <div className="flex items-center justify-between mt-4">
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
              className="w-full h-14 bg-red cursor-pointer flex items-center justify-center px-4 hover:bg-red-100 rounded-full text-rose-50 font-medium"
            >
              Start New Order
            </button>
          </div>
        </section>
      )}
    </>
  );
}
