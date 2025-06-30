function Cart() {
  return (
    <section className="bg-white p-5 rounded-xl shadow-xl h-fit">
      <h2 className="text-red text-2xl font-bold mb-2 leading-tight">Your Cart (0)</h2>
      <div className="grid place-items-center py-6">
        <img className="mb-3" src="/public/assets/images/illustration-empty-cart.svg" alt="" />
        <p className="text-rose-500 font-medium">Your added items will appear here</p>
      </div>
    </section>
  )
}

export default Cart