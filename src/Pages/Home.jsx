import HeroPage from "../components/HeroPage";
import Services from "../components/Services";
import About from "./About"

const Home = () => {
  return (
    <div>
      <h1>
        <HeroPage />
        <About />
        <Services />
      </h1>
    </div>
  );
};

export default Home;
