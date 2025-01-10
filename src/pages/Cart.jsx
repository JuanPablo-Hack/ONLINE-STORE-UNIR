import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);
  return (
    <>
      <div className="cart">
        <div className="cart__title">
          <Title text1={"YOUR"} text2={"CART"} />
        </div>
        <div>
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );

            return (
              <div key={index} className="cart__order">
                <div className="order__data">
                  <img
                    className="data__image"
                    src={productData.image[0]}
                    alt=""
                  />
                  <div>
                    <p className="data__name">{productData.name}</p>
                    <div className="data__price">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                      <p className="data__size">{item.size}</p>
                    </div>
                  </div>
                </div>
                <input
                  type="number"
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                  className="data__quantity"
                  min={1}
                  defaultValue={item.quantity}
                />
                <img
                  src={assets.bin_icon}
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="data__delete"
                />
              </div>
            );
          })}
        </div>
        <div className="cart__checkout">
          <div className="checkout__box">
            <CartTotal />
            <div className="box__item">
              <button
                onClick={() => navigate("/place-order")}
                className="item__button"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
