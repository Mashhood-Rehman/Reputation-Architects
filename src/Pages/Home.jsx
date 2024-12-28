import CursorAnimation from "../components/CursorAnimation";
import HeroPage from "../components/HeroPage";
import Services from "../components/Services";
import Testimonials from "../components/Testimonial";
import ContactLink from "../components/ContactLink";
import About from "./About";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <CursorAnimation />
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
