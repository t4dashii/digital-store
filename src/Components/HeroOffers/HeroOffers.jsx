import { useState } from 'react';
import './HeroOffers.css';
import nikeShoe from '../../assets/tenis-nike.png';
import jordanShoe from '../../assets/tenis-jordan.png';

export default function HeroOffers() {
  const [activeDot, setActiveDot] = useState(0);

  const slides = [
    {
      badge: 'Melhores ofertas personalizadas',
      title: 'Queima de estoque Nike 🔥',
      description: 'Aproveite descontos exclusivos em produtos Nike. Estoque limitado, ofertas imperdíveis feitas pra você.',
      image: nikeShoe,
      alt: 'Tênis Nike',
    },
    {
      badge: 'Edição Limitada',
      title: 'Air Jordan Colecionador',
      description: 'Tênis icônico para colecionadores. Design premium e materiais exclusivos.',
      image: jordanShoe,
      alt: 'Air Jordan',
    },
  ];

  return (
    <section className="hero-offers">
      <div className="hero-container">
        <div className="hero-slides" style={{ transform: `translateX(-${activeDot * 100}%)`, width: '100%' }}>
          {slides.map((slide, index) => (
            <div key={index} className="hero-slide" style={{ minWidth: '100%' }}>
              <div className="hero-content">
                <span className="hero-badge">{slide.badge}</span>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-description">{slide.description}</p>
                <button className="hero-btn">Ver Ofertas</button>
              </div>
              <img src={slide.image} alt={slide.alt} className="hero-image" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${activeDot === index ? 'active' : ''}`}
            onClick={() => setActiveDot(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}