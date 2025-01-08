import { assets } from "../../assets/assets";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div className="hero">
        {/* Hero left side */}
        <div className="hero__leftside">
          <div className="leftside__content">
            <div className="content__item">
              <p className="item__line"></p>
              <p className="item__text-right">Our bestsellers</p>
            </div>
            <h1 className="prata-regular leftside__title">Latest Arrival</h1>
            <div className="content__item">
              <p className="item__line"></p>
              <p className="item__text-left">Shop Now</p>
            </div>
          </div>
        </div>
        {/* Hero right side */}
        <img className="hero__rightside" src={assets.hero_img} alt="Hero img" />
      </div>
    </>
  );
};

export default Hero;
