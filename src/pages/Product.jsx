import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Product = () => {
  const productId = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId.id) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [products, productId]);

  return productData ? (
    <>
      <div className="product">
        {/* Product Data */}
        <div className="product__data">
          {/* Product Images */}
          <div className="product__gallery">
            <div className="gallery__list">
              {productData.image.map((item, index) => (
                <img
                  src={item}
                  key={index}
                  onClick={() => setImage(item)}
                  className="list__image"
                  alt="Galery"
                />
              ))}
            </div>
            <div className="gallery__principal">
              <img
                className="principal__image"
                src={image}
                alt="Image Product"
              />
            </div>
          </div>
          {/* Product Info */}
          <div className="product__info">
            <h1 className="info__name">{productData.name}</h1>
            <div className="info__stars">
              <img src={assets.star_icon} alt="Start" className="stars__item" />
              <img src={assets.star_icon} alt="Start" className="stars__item" />
              <img src={assets.star_icon} alt="Start" className="stars__item" />
              <img src={assets.star_icon} alt="Start" className="stars__item" />
              <img
                src={assets.star_dull_icon}
                alt="Start"
                className="stars__item"
              />
              <p className="stars__text">(122)</p>
            </div>
            <p className="info__price">
              {currency}
              {productData.price}
            </p>
            <p className="info__description">{productData.description}</p>
            <div className="info__sizes">
              <p>Select Size</p>
              <div className="sizes__list">
                {productData.sizes.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    className={`list__size ${
                      item === size ? "border-orange-500" : ""
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => addToCart(productData._id, size)}
              className="info__addcart"
            >
              ADD TO CART
            </button>
            <hr className="info__separator" />
            <div className="info__delivery">
              <p>100% original products.</p>
              <p>Cash on delivery is aviable on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>
        {/* Product Reviews */}
        <div className="product__reviews">
          <div className="reviews__top">
            <b className="top__text">Description</b>
            <p className="top__text">Reviews (122)</p>
          </div>
          <div className="reviews__resume">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              voluptate assumenda alias. Necessitatibus atque modi nostrum.
              Molestias doloribus fugiat consequuntur, sed iste quisquam
              laudantium impedit, omnis repellat officia saepe maiores.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              facere magni blanditiis explicabo unde. Et commodi sit, iste ex
              omnis doloremque dicta quibusdam sequi veritatis voluptatum
              quidem, consequuntur, placeat quaerat?
            </p>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="noproduct"></div>
  );
};

export default Product;
