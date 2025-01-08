import BestSeller from "../components/BestSeller/BestSeller";
import Hero from "../components/Hero/Hero";
import LatestCollections from "../components/LatestCollections/LatestCollections";

const Home = () => {
  return (
    <>
      <Hero />
      <LatestCollections />
      <BestSeller />
    </>
  );
};

export default Home;
