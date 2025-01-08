import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../Title/Title";
import "./LatestCollections.css";
import ProductItem from "../ProductItem/ProductItem";

const LatestCollections = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);
  return (
    <>
      <div className="collections">
        <div className="collections__title">
          <Title text1={"LATEST"} text2={"COLLECTIONS"} />
          <p className="collections__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* LATEST PRODUCTS */}
        <div className="collections__products">
          {latestProducts.map((item, index) => (
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
    </>
  );
};

export default LatestCollections;
