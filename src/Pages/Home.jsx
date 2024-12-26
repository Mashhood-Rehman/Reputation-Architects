import HeroPage from "../components/HeroPage";
import Services from "../components/Services";
import Testimonials from "../components/Testimonial";
import About from "./About";

const Home = () => {
  return (
    <div>
      <h1>
        <div className=" relative">
          <HeroPage />
        </div>

        <About />
        <Services />
        <Testimonials />
      </h1>
    </div>
  );
};

export default Home;
