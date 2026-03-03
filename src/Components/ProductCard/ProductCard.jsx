import "./ProductCard.css";
import tenis from "../../assets/tenis-image.png";
import { useCart } from "../../Context/CartContext.jsx";

export default function ProductCard({ product = {}, index = 0 }) {
  const { toggleFavorite, favorites } = useCart();
  const productId = product.id || index + 1;
  const isFavorite = favorites.includes(productId);

  const defaultProduct = {
    id: productId,
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    oldPrice: "R$ 299,90",
    newPrice: "R$ 199,90",
    image: tenis,
  };

  const currentProduct = { ...defaultProduct, ...product };

  return (
    <div className="product-card">
      <div className="card-image">
        <span className="discount-badge">30% OFF</span>

        <button
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(productId);
          }}
        >
          <i className="bx bxs-star"></i>
        </button>

        <img
          src={currentProduct.image}
          alt={currentProduct.name}
          loading="lazy"
        />
      </div>

      <div className="card-content">
        <span className="category">{currentProduct.category}</span>
        <h3 className="product-name">{currentProduct.name}</h3>

        <div className="price">
          <span className="old-price">{currentProduct.oldPrice}</span>
          <span className="new-price">{currentProduct.newPrice}</span>
        </div>
      </div>
    </div>
  );
}
