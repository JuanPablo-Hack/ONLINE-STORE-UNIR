import Title from "../components/Title/Title";
import { assets } from "../assets/assets";
import Newsletter from "../components/Newsletter/Newsletter";

const About = () => {
  return (
    <>
      <div className="text-2xl text-center pt-8 borber-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
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
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            suscipit quasi asperiores! Odio quis maiores eius ducimus aliquid
            minima. Repudiandae suscipit laborum ipsam sit pariatur culpa
            quisquam soluta similique quibusdam!
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, vitae
            ut laboriosam esse adipisci culpa asperiores excepturi dolorum
            aliquid praesentium veniam, impedit a unde, dolorem nobis deleniti
            rem minus? Debitis!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, vitae
            ut laboriosam esse adipisci culpa asperiores excepturi dolorum
            aliquid praesentium veniam, impedit a unde, dolorem nobis deleniti
            rem minus? Debitis!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptionalo costumer service:</b>
          <p className="text-gray-600">
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
