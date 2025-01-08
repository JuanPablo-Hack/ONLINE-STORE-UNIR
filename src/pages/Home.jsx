import BestSeller from "../components/BestSeller/BestSeller";
import Hero from "../components/Hero/Hero";
import LatestCollections from "../components/LatestCollections/LatestCollections";
import OurPolicy from "../components/OurPolicy/OurPolicy";

const Home = () => {
  return (
    <>
      <Hero />
      <LatestCollections />
      <BestSeller />
      <OurPolicy />
    </>
  );
};

export default Home;
