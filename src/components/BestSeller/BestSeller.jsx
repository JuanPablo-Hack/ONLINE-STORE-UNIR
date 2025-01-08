import { useContext, useEffect, useState } from "react";
import Title from "../Title/Title";
import ProductItem from "../ProductItem/ProductItem";
import { ShopContext } from "../../context/ShopContext";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);
  return (
    <>
      <div className="section">
        <div className="section__title">
          <Title text1={"BEST"} text2={"SELLERS"} />
          <p className="section__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      {/* BEST SELLER PRODUCTS */}
      <div className="section__products">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
};

export default BestSeller;
