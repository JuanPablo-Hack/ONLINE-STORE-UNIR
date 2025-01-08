import BestSeller from "../components/BestSeller/BestSeller";
import Hero from "../components/Hero/Hero";
import LatestCollections from "../components/LatestCollections/LatestCollections";
import Newsletter from "../components/Newsletter/Newsletter";
import OurPolicy from "../components/OurPolicy/OurPolicy";

const Home = () => {
  return (
    <>
      <Hero />
      <LatestCollections />
      <BestSeller />
      <OurPolicy />
      <Newsletter />
    </>
  );
};

export default Home;
