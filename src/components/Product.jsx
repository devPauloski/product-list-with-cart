import data from "../data.json";

function ProductList() {
  const products = data.map((item) => {
    return (
      <li key={item.id}>
        <div className="relative">
          <picture>
            <source srcSet={item.image.desktop} media="(min-width: 64em)" />
            <source srcSet={item.image.tablet} media="(min-width: 48em)" />
            <img 
              src={item.image.mobile}
              alt={item.name}
              className="rounded-xl"
            />
          </picture>
          <button className="inline-flex px-4 py-2.5 border-1 flex-wrap gap-2 rounded-[100vmax] cursor-pointer border-rose-400 absolute  items-center justify-center inset-x-[20vw] -translate-y-2/4 bg-white">
            <img src="/assets/images/icon-add-to-cart.svg" alt="" />
            <span className="font-medium text-rose-900">Add to cart</span>
          </button>
          <div className="hidden bg-rose-500">
            <button aria-label="Increase quantity">
              <img src="/assets/images/icon-increment-quantity.svg" alt="" />
            </button>
            <span aria-label="Quantity">0</span>
            <button aria-label="Decrease quantity">
              <img src="/assets/images/icon-decrement-quantity.svg" alt="" />
            </button>
          </div>
        </div>
        <p className="mt-9 text-rose-300 mb-2.5 text-sm">{item.category}</p>
        <h2 className="mb-3 font-medium text-rose-900">{item.name}</h2>
        <p className="font-medium text-red">${item.price}</p>
      </li>
    );
  });

  return <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{products}</ul>;
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
