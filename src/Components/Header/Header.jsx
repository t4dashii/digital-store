import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../Context/CartContext.jsx";
import logo from "../../assets/Vector.png";
import "./Header.css";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const { cart } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Buscar:", searchQuery);
  };

  return (
    <header className="header">
      {/* TOPO */}
      <div className="header-container">
        {/* LOGO */}
        <Link to="/" className="header-logo">
          <img src={logo} alt="Digital Store" className="logo-img" />
          <span className="logo-text">Digital Store</span>
        </Link>

        {/* BUSCA */}
        <form className="header-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button className="search-btn" type="submit">
            <FaSearch />
          </button>
        </form>

        {/* AÇÕES */}
        <div className="header-actions">
          <NavLink to="/cadastro" className="nav-link">
            Cadastre-se
          </NavLink>

          <NavLink to="/login" className="login-btn">
            Entrar
          </NavLink>

          <NavLink to="/carrinho" className="cart-icon">
            <FaShoppingCart />
            {cart.length > 0 && (
              <span className="cart-count">{cart.length}</span>
            )}
          </NavLink>
        </div>
      </div>

      {/* MENU */}
      <nav className="header-nav">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/produtos" className="nav-link">
          Produtos
        </NavLink>
        <NavLink to="/categorias" className="nav-link">
          Categorias
        </NavLink>
        <NavLink to="/meus-pedidos" className="nav-link">
          Meus Pedidos
        </NavLink>
      </nav>
    </header>
  );
}