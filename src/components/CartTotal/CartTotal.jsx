import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../Title/Title";
import "./CartTotal.css";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  return (
    <>
      <div className="carrito">
        <div className="carritop__top">
          <Title text1={"CART"} text2={"TOTALS"} />
        </div>
        <div className="carrito__cuerpo">
          <div className="cuerpo__item">
            <p>Subtotal</p>
            <p>
              {currency}
              {getCartAmount()}.00
            </p>
          </div>
          <hr />
          <div className="cuerpo__item">
            <p>Shipping Fee</p>
            <p>
              {currency}
              {delivery_fee}.00
            </p>
          </div>
          <hr />
          <div className="cuerpo__item">
            <p>Total</p>
            <p>
              {currency}
              {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
