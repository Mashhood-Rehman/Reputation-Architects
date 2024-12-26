import CursorAnimation from "../components/CursorAnimation";
import Footer from "../components/Footer";
import HeroPage from "../components/HeroPage";
import Services from "../components/Services";
import Testimonials from "../components/Testimonial";
import About from "./About";

const Home = () => {
  return (
    <div>
      <h1>
        <CursorAnimation/>
        <HeroPage />
        <About />
        <Services />
        <Testimonials />
        <Footer />
      </h1>
    </div>
  );
};

export default Home;
