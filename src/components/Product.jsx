import data from "../data.json";

function ProductList() {
  const products = data.map((item) => {
    return (
      <li key={item.id}>
        <picture>
          <source srcSet={item.image.desktop} media="(min-width: 64em)" />
          <source srcSet={item.image.tablet} media="(min-width: 48em)" />
          <img src={item.image.mobile} alt={item.name} className="rounded-xl" />
        </picture>
        <button className="hidden px-[10%] py-3 border-1 flex-wrap gap-2 rounded-[100vmax] cursor-pointer border-rose-400 items-center justify-center -translate-y-2/4 bg-white relative left-2/4 -translate-x-2/4">
          <img src="/assets/images/icon-add-to-cart.svg" alt="" />
          <span className="font-medium text-rose-900">Add to cart</span>
        </button>
        <div className="inline-flex items-center justify-between gap-4 bg-red px-[10%] py-3 -translate-y-2/4 left-2/4 -translate-x-2/4 relative max-w-[10rem] w-full rounded-[100vmax]">
          <button aria-label="Increase quantity" className="border-rose-50">
            <img src="/assets/images/icon-decrement-quantity.svg" alt="" />
          </button>
          <span aria-label="Quantity" className="text-rose-50">0</span>
          <button aria-label="Decrease quantity">
            <img src="/assets/images/icon-increment-quantity.svg" alt="" />
          </button>
        </div>
        <p className="mb-1 text-sm text-rose-300">{item.category}</p>
        <h2 className="mb-1 font-medium text-rose-900">{item.name}</h2>
        <p className="font-medium text-red">${item.price}</p>
      </li>
    );
  });

  return (
    <ul className="grid gap-6 md:gap-5 md:gap-y-9 md:grid-cols-2 lg:grid-cols-3">{products}</ul>
  );
}

function Product() {
  return (
    <section>
      <h1 className="font-bold leading-tight text-[2rem] mb-9">Desserts</h1>
      <ProductList />
    </section>
  );
}

export default Product;
