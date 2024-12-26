import CursorAnimation from "../components/CursorAnimation";
import Footer from "../components/Footer";
import HeroPage from "../components/HeroPage";
import Services from "../components/Services";
import Testimonials from "../components/Testimonial";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      
        <CursorAnimation/>
        <HeroPage />

        <About />
        <Services />
        <Testimonials />
        <Footer />
    </div>
  );
};

export default Home;
