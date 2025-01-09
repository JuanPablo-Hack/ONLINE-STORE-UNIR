import Title from "../components/Title/Title";
import { assets } from "../assets/assets";
import Newsletter from "../components/Newsletter/Newsletter";

const Contact = () => {
  return (
    <>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our store</p>
          <p className="text-gray-500">
            28879 Villaurrutia <br /> Palmares del Pacifico{" "}
          </p>
          <p className="text-gray-500">
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
