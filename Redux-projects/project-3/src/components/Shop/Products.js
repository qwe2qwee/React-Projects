import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 813,
    title: "iPhone 13 Pro",
    description: "phone from apple cmpany and good staf",
  },
  {
    id: "p2",
    price: 327.23,
    title: "Samsung Galaxy A53",
    description: "this phone is very good for android device",
  },
  {
    id: "p3",
    price: 228,
    title: "Samsung Galaxy A14",
    description: "this phone is very good and safe",
  },
  {
    id: "p4",
    price: 307,
    title: "Huawei P40 Lite",
    description: "this phone is very good",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite Phone</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
