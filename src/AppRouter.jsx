import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import HeroOffers from "./Components/HeroOffers/HeroOffers";
import EmphasisSection from "./Components/FeatureEmphasis/EmphasisSection";
import FeaturedCollections from "./Components/FeaturedCollections/FeaturedCollections";
import ProductList from "./Components/ProductList/ProductList";
import FeaturedProduct from "./Components/FeaturedProduct/FeaturedProduct";

function Home() {
  return (
    <>
      <HeroOffers />
      <EmphasisSection />
      <FeaturedCollections />

      {/* PRODUTOS EM ALTA */}
      <section className="products-wrapper">
        <h2 className="products-title">Produtos em alta</h2>

        <div className="products-container">
          <ProductList />
        </div>
      </section>

      <FeaturedProduct />
    </>
  );
}

function Placeholder() {
  return <div className="text-center py-20">Página em construção</div>;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Placeholder />} />
        <Route path="/categorias" element={<Placeholder />} />
        <Route path="/meus-pedidos" element={<Placeholder />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}