import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <img src={assets.logo} className="footer__logo" alt="Footer logo" />
          <p className="footer__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            iste amet dolorem eaque debitis! Enim, laboriosam quidem fugiat sed
            dignissimos aperiam rem at, libero voluptatum accusamus cupiditate
            placeat tempore labore.
          </p>
        </div>
        <div>
          <p className="footer__title">COMPANY</p>
          <ul className="footer__list">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Policy</li>
          </ul>
        </div>
        <div>
          <p className="footer__title">GET IN TOUCH</p>
          <ul className="footer__list">
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="copyright">
          Copyright 2024 @ foreveryou.com - All right reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
