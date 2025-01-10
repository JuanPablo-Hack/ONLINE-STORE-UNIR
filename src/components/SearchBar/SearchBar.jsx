import { useContext, useEffect } from "react";
import { ShopContext } from "../../context/ShopContext";
import { assets } from "../../assets/assets";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <>
      <div className="searchbar">
        <div className="searchbar__form">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search..."
            className="form__input"
          />
          <img
            className="form__image"
            src={assets.search_icon}
            alt="Search Icon"
          />
        </div>
        <img
          onClick={() => setShowSearch(false)}
          className="searchbar__icon"
          src={assets.cross_icon}
          alt="Cross Icon"
        />
      </div>
    </>
  ) : null;
};

export default SearchBar;
