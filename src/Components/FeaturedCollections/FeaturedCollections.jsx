import { useState } from "react";
import { Icon } from "@iconify/react";
import "./FeaturedCollections.css";

export default function FeaturedCollections() {
  const [active, setActive] = useState(null);

  const collections = [
    { id: 0, name: "Camisetas", icon: "ph:t-shirt-thin" },
    { id: 1, name: "Calças", icon: "ph:pants-thin" },
    { id: 2, name: "Bonés", icon: "fluent-emoji-high-contrast:billed-cap" },
    { id: 3, name: "Headphones", icon: "sidekickicons:headphones" },
    { id: 4, name: "Tênis", icon: "ph:sneaker", rotate: true },
  ];

  return (
    <section className="featured-collections">
      <h2 className="collections-title">Coleções em destaque</h2>

      <div className="collections-grid">
        {collections.map((item) => (
          <button
            key={item.id}
            className={`collection-btn ${active === item.id ? "active" : ""}`}
            onClick={() => setActive(item.id)}
          >
            <Icon
              icon={item.icon}
              className={`collection-icon ${
                item.rotate ? "rotate-sneaker" : ""
              }`}
            />

            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}