import emptyCartIcon from "../assets/icons/illustration-empty-cart.svg";

export default function Cart() {
  return (
    <section className="h-fit rounded-xl bg-white p-5 shadow-xl">
      <h2 className="mb-2 text-2xl leading-tight font-bold text-red">
        Your Cart (0)
      </h2>
      <div className="grid place-items-center pt-6 pb-14">
        <img className="mb-3" src={emptyCartIcon} alt="" />
        <p className="font-medium text-rose-500">
          Your added items will appear here
        </p>
      </div>
    </section>
  );
}


