import data from "../data.json";

function ProductList() {
  const products = data.map((item) => {
    return (
      <li key={item.id}>
        <div>
          <picture>
            <source srcSet={item.image.desktop} media="(min-width: 64em)" />
            <source srcSet={item.image.tablet} media="(min-width: 48em)" />
            <img src={item.image.mobile} alt={item.name} />
          </picture>
          <button>
            <img src="/assets/images/icon-add-to-cart.svg" alt="" />
            <span>Add to cart</span>
          </button>
          <div className="bg-rose-500">
            <button aria-label="Increase quantity">
              <img src="/assets/images/icon-increment-quantity.svg" alt="" />
            </button>
            <span aria-label="Quantity">0</span>
            <button aria-label="Decrease quantity">
              <img src="/assets/images/icon-decrement-quantity.svg" alt="" />
            </button>
          </div>
        </div>
        <p>{item.category}</p>
        <h2>{item.name}</h2>
        <p>${item.price}</p>
      </li>
    );
  });
  return <ul>{products}</ul>;
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
