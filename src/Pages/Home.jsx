import CursorAnimation from "../components/CursorAnimation";
import Footer from "../components/Footer";
import HeroPage from "../components/HeroPage";
import Services from "../components/Services";
import Testimonials from "../components/Testimonial";
import ContactLink from "../components/ContactLink";
import About from "./About";

const Home = () => {
  return (
    <div>
      
        <CursorAnimation/>
        <HeroPage />

        <About />
        <Services />
        <Testimonials />
        <ContactLink />
        <Footer />
    </div>
  );
};

export default Home;
