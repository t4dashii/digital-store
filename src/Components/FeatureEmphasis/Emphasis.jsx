import "./Emphasis.css";

export default function Emphasis({ title, image, imageClass }) {
  return (
    <div className="emphasis-card">
      <span className="discount-badge">30% OFF</span>
      <div className="emphasis-content">
        <h3 className="emphasis-title">{title}</h3>
        <button className="buy-btn">Comprar</button>
      </div>
      <img src={image} alt="" className={`emphasis-image ${imageClass}`} />
    </div>
  );
}