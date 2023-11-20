import { Link } from "react-router-dom";

function ProductCard({ productProps }) {
  return (
    <article>
      <h3>{productProps.title}</h3>
      <p>{productProps.price}</p>
      <Link to={`/products/${productProps.id}`}>
        <button>Voir le produit</button>
      </Link>
    </article>
  );
}

export default ProductCard;
