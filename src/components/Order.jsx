import OrderConfirmedIcon from "../assets/icons/icon-order-confirmed.svg?react";

export default function Order({ cartItems, isOrderConfirmed, startNewOrder, totalAmount }) {
  return (
    <>
      {isOrderConfirmed && (
        <section className="fixed top-0 left-0 z-1 h-full w-full bg-overlay md:place-content-center">
          <div className="mx-auto max-w-[37.125rem] rounded-xl bg-white px-6 pt-10 pb-6 max-md:mt-24">
            <OrderConfirmedIcon className="mb-8" />
            <h2 className="mb-4 text-4xl font-bold text-rose-900 max-md:max-w-[10ch]">
              Order Confirmed
            </h2>
            <p className="mb-6 text-rose-400">We hope you enjoy your food!</p>
            <div className="bg-rose-100 p-5.5 rounded-lg">
              <ul>
                {cartItems.map((item) => {
                  return (
                    <li
                      className="flex items-center justify-between py-4"
                      key={item.id}
                    >
                      <div className="flex items-center gap-3">
                        <img 
                        className="w-12 h-12 rounded-sm"
                          src={item.image.thumbnail} 
                          alt={item.name}
                         />
                        <div>
                          <h3>{item.name}</h3>
                          <div className="flex">
                            <p className="mr-6 text-red">{item.quantity}x</p>
                            <p className="font-medium text-rose-500">
                              &#64;${item.price}
                            </p>
                          </div>
                        </div>
                      </div>
                      <p>${item.price * item.quantity}</p>
                    </li>
                  );
                })}
              </ul>
              <div className="flex">
                <p>Order Total</p>
                <p className="text-2xl font-bold">
                  ${totalAmount().toFixed(2)}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                startNewOrder();
              }}
            >
              Start New Order
            </button>
          </div>
        </section>
      )}
    </>
  );
}
