import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";
import "./ProductItem.css";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <>
      <Link className="product" to={`/product/${id}`}>
        <div className="product__image">
          <img
            className="product__image-hover"
            src={image[0]}
            alt="Imagen producto"
          />
        </div>
        <p className="product__name">{name}</p>
        <p className="product__price">
          {currency}
          {price}
        </p>
      </Link>
    </>
  );
};

export default ProductItem;
