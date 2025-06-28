import data from "../data.json";

function ProductList() {
  const products = data.map((product) => {
    return (
      <li key={product.id}>
        <div>
          <img src="" alt="" />
        </div>
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
