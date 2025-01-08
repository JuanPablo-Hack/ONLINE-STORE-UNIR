import { assets } from "../../assets/assets";
import "./OurPolicy.css";
const OurPolicy = () => {
  return (
    <>
      <div className="ourpolicy">
        <div>
          <img
            className="ourpolicy__icon"
            src={assets.exchange_icon}
            alt="Exchange Icon"
          />
          <p className="ourpolicy__title">Easy Exchange Policy</p>
          <p className="ourpolicy__text">
            We offer hassle free exchange policy
          </p>
        </div>
        <div>
          <img
            className="w-12 m-auto mb-5"
            src={assets.quality_icon}
            alt="Exchange Icon"
          />
          <p className="ourpolicy__title">7 days return policy</p>
          <p className="ourpolicy__text">
            We provide 7 days free return policy
          </p>
        </div>
        <div>
          <img
            className="w-12 m-auto mb-5"
            src={assets.support_img}
            alt="Exchange Icon"
          />
          <p className="ourpolicy__title">Best customer support</p>
          <p className="ourpolicy__text">We provide 24/7 custumer support</p>
        </div>
      </div>
    </>
  );
};

export default OurPolicy;
