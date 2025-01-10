import { NavLink, Link, createSearchParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./NavBar.css";
import { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} className="navbar__logo" alt="Logo" />
      </Link>
      <ul className="navbar__menu">
        <NavLink to="/" className="menu__item">
          <p>Inicio</p>
          <hr className="item__separator" />
        </NavLink>
        <NavLink to="/collections" className="menu__item">
          <p>Collections</p>
          <hr className="item__separator" />
        </NavLink>
        <NavLink to="/about" className="menu__item">
          <p>About</p>
          <hr className="item__separator" />
        </NavLink>
        <NavLink to="/contact" className="menu__item">
          <p>Contact</p>
          <hr className="item__separator" />
        </NavLink>
      </ul>
      <div className="navbar__sidebar">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="sidebar__search"
          alt="Search"
        />
        {/* TODO: Realizar el BEM de este apartado en CSS */}
        <Link to="/cart" className="sidebar__cart">
          <img src={assets.cart_icon} className="cart__image" alt="Cart" />
          <p className="cart__text">{getCartCount()}</p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="Menu"
          className="sidebar__menu"
        />
      </div>
      {/* Sidebar menu for small screen */}
      <div className={`navbar__menuphone ${visible ? "w-full" : "w-0"}`}>
        <div className="menuphone__list">
          <div onClick={() => setVisible(false)} className="list__back">
            <img
              src={assets.dropdown_icon}
              alt="Close"
              className="back__icon"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="list__item"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="list__item"
            to="/collections"
          >
            Collections
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="list__item"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="list__item"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
