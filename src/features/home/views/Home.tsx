import Banner from "../components/Banner";
import News from "../components/News";
import PeduliSampah from "../components/PeduliSampah";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <Banner />
      <PeduliSampah />
      <News />
      <Testimonial />
    </div>
  );
};

export default Home;
