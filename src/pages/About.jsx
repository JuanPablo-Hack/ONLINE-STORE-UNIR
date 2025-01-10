import Title from "../components/Title/Title";
import { assets } from "../assets/assets";
import Newsletter from "../components/Newsletter/Newsletter";

const About = () => {
  return (
    <>
      <div className="about">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="resume">
        <img className="resume__img" src={assets.about_img} alt="" />
        <div className="resume__text">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            blanditiis ipsum adipisci dignissimos? Officia, perferendis sapiente
            atque deserunt quidem quasi praesentium sed! Numquam, ipsum ratione
            libero asperiores est odit corrupti?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            similique numquam eligendi illo dolor hic adipisci. Vel possimus
            nisi, accusamus aspernatur pariatur fugiat consectetur praesentium
            delectus architecto tempore cum at!
          </p>
          <b className="text__mission">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            suscipit quasi asperiores! Odio quis maiores eius ducimus aliquid
            minima. Repudiandae suscipit laborum ipsam sit pariatur culpa
            quisquam soluta similique quibusdam!
          </p>
        </div>
      </div>
      <div className="titlewhy">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="whychooseus">
        <div className="whychooseus__item">
          <b>Quality Assurance:</b>
          <p className="item__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, vitae
            ut laboriosam esse adipisci culpa asperiores excepturi dolorum
            aliquid praesentium veniam, impedit a unde, dolorem nobis deleniti
            rem minus? Debitis!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="item__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, vitae
            ut laboriosam esse adipisci culpa asperiores excepturi dolorum
            aliquid praesentium veniam, impedit a unde, dolorem nobis deleniti
            rem minus? Debitis!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptionalo costumer service:</b>
          <p className="item__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, vitae
            ut laboriosam esse adipisci culpa asperiores excepturi dolorum
            aliquid praesentium veniam, impedit a unde, dolorem nobis deleniti
            rem minus? Debitis!
          </p>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default About;
