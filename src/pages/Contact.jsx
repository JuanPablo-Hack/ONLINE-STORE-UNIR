import Title from "../components/Title/Title";
import { assets } from "../assets/assets";
import Newsletter from "../components/Newsletter/Newsletter";

const Contact = () => {
  return (
    <>
      <div className="contacttitle">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="contact">
        <img className="contact__image" src={assets.contact_img} alt="" />
        <div className="contact__info">
          <p className="info__title">Our store</p>
          <p className="info__text">
            28879 Villaurrutia <br /> Palmares del Pacifico{" "}
          </p>
          <p className="info__text">
            Tel: (314)-120-4575 <br />
            Email: contact@foreveryou.com
          </p>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default Contact;
