import Banner from "../components/Banner";
import News from "../components/News";
import PeduleSampah from "../components/PeduleSampah";

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <Banner />
      <PeduleSampah />
      <News />
    </div>
  );
};

export default Home;
