import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal/CartTotal";
import Title from "../components/Title/Title";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);

  return (
    <>
      <div className="placeorder">
        <div className="placeorder__form">
          <div className="form__title">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>
          <div className="form__group">
            <input
              className="form__input"
              type="text"
              placeholder="First Name"
            />
            <input
              className="form__input"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input className="form__input" type="email" placeholder="Email" />
          <input className="form__input" type="text" placeholder="Street" />
          <div className="form__group">
            <input className="form__input" type="text" placeholder="City" />
            <input className="form__input" type="text" placeholder="State" />
          </div>
          <div className="form__group">
            <input className="form__input" type="text" placeholder="Zipcode" />
            <input className="form__input" type="text" placeholder="Country" />
          </div>
          <input className="form__input" type="number" placeholder="Phone" />
        </div>
        <div className="placeorder_checkout">
          <div className="checkout__cart">
            <CartTotal />
          </div>
          <div className="checkout__methods">
            <Title text1={"PAYMENT"} text2={"METHOD"} />
            <div className="methods__list">
              <div onClick={() => setMethod("stripe")} className="list__method">
                <p
                  className={`method__check ${
                    method === "stripe" ? "bg-green-400" : ""
                  }`}
                ></p>
                <img className="method__logo" src={assets.stripe_logo} alt="" />
              </div>
              <div
                onClick={() => setMethod("razorpay")}
                className="list__method"
              >
                <p
                  className={`method__check ${
                    method === "razorpay" ? "bg-green-400" : ""
                  }`}
                ></p>
                <img
                  className="method__logo"
                  src={assets.razorpay_logo}
                  alt=""
                />
              </div>
              <div onClick={() => setMethod("cod")} className="list__method">
                <p
                  className={`method__check ${
                    method === "cod" ? "bg-green-400" : ""
                  }`}
                ></p>
                <p className="method__text">CASH ON DELIVERY</p>
              </div>
            </div>
          </div>
          <div className="checkout__action">
            <button
              onClick={() => navigate("/orders")}
              className="action__button"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
