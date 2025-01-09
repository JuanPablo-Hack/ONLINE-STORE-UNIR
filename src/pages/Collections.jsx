import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title/Title";
import ProductItem from "../components/ProductItem/ProductItem";

const Collections = () => {
  const { products, showSearch, search } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let sortProductsFilter = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(sortProductsFilter.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(sortProductsFilter.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <>
      <div className="collections">
        {/* Filter Options */}
        <div className="collections__filter">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="filter__text"
          >
            FILTERS
            <img
              src={assets.dropdown_icon}
              alt="Filter"
              className={`filter__icon ${showFilter ? "rotate-90" : ""}`}
            />
          </p>
          {/* Category filter */}
          <div
            className={`filter__category ${
              showFilter ? "" : "hidden"
            }  sm:block`}
          >
            <p className="category__title">CATEGORIES</p>
            {/* TODO: REVISAR EL CSS Y HACER METODO BEM */}
            <div className="flex flex-col gap text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  onChange={toggleCategory}
                  value={"Men"}
                />{" "}
                Men
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  onChange={toggleCategory}
                  value={"Women"}
                />{" "}
                Women
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  onChange={toggleCategory}
                  value={"Kids"}
                />{" "}
                Kids
              </p>
            </div>
          </div>
          {/* Subcategory filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            }  sm:block`}
          >
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  onChange={toggleSubCategory}
                  value={"Topwear"}
                />{" "}
                Topwear
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  onChange={toggleSubCategory}
                  value={"Bottomwear"}
                />{" "}
                Bottomwear
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  onChange={toggleSubCategory}
                  value={"Winterwear"}
                />{" "}
                Winterwear
              </p>
            </div>
          </div>
        </div>
        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1="ALL" text2="COLLECTIONS" />
            {/* Product Sort */}
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border-2 border-gray-300 text-sm px-2"
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to high</option>
              <option value="high-low">Sort by: High to low</option>
            </select>
          </div>
          {/* Product Map */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
