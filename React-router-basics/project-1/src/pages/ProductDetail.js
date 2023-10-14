import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ProductDetail = () => {
  const params = useParams();
  return (
    <section>
      <h1>project Deatails</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
