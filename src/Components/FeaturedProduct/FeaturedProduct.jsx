import "./FeaturedProduct.css";
import tenis from "../../assets/tenis-jordan.png";

export default function FeaturedProduct() {
  return (
    <section className="featured-product">
      <div className="featured-content">
        <div className="featured-image-wrapper">
          <div className="background-ellipse"></div>
          <img src={tenis} alt="Air Jordan" className="featured-image" />
        </div>
        <div className="featured-text">
          <span className="special-offer">Oferta Especial</span>
          <h2 className="featured-title">Air Jordan Edição Colecionador</h2>
          <p className="featured-description">
            Um tênis exclusivo para colecionadores, feito com materiais premium e design icônico.
          </p>
          <button className="featured-btn">Ver oferta</button>
        </div>
      </div>
    </section>
  );
}