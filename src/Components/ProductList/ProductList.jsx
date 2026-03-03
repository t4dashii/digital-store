import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

export default function ProductList() {
  return (
    <section className="products-section">
      <div className="products-grid">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCard key={index} index={index} />
        ))}
      </div>
    </section>
  );
}
