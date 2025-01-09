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
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="Menu"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      {/* Sidebar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className=" flex flex-col text-gray-600 ">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              src={assets.dropdown_icon}
              alt="Close"
              className="h-4 rotate-180"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collections"
          >
            Collections
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
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
