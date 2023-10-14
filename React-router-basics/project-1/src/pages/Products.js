import { Link } from "react-router-dom";
const Products = () => {
  return (
    <section>
      <h1>the Products page</h1>
      <ul>
        <li>
          <Link to='Products/p1'>A book</Link>
        </li>
        <li>
          <Link to='Products/p2'>A ball</Link>
        </li>
        <li>
          <Link to='Products/p3'>A laptop</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
