import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title/Title";

function Orders() {
  const { products, currency } = useContext(ShopContext);

  return (
    <>
      <div className="orders">
        <div className="orders__title">
          <Title text1={"MY"} text2={"ORDERS"} />
        </div>
        <div>
          {products.slice(1, 4).map((item, index) => (
            <div key={index} className="orders__list ">
              <div className="list__item">
                <img className="item__image" src={item.image[0]} alt="" />
                <div>
                  <p className="item__name">{item.name}</p>
                  <div className="item__info">
                    <p className="info__price">
                      {currency}
                      {item.price}
                    </p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>
                  </div>
                  <p>
                    Date: <span className="item__date">09 Ene 2025</span>
                  </p>
                </div>
                <div className="item__status">
                  <div className="status__ship">
                    <p className="ship__color"></p>
                    <p className="ship__text">Ready to ship</p>
                  </div>
                  <button className="status__track">Track order</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Orders;
