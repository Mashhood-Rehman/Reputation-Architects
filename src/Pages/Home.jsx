import CursorAnimation from "../components/CursorAnimation";
import HeroPage from "../components/HeroPage";
import Services from "../components/Services";
import Testimonials from "../components/Testimonial";
import About from "../components/About";
import { useEffect } from "react";
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
    </div>
  );
};

export default Home;
