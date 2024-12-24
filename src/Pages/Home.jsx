import HeroPage from "../components/HeroPage";
import Services from "../components/Services";
import CursorAnimation from "../components/CursorAnimation";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div >
      <h1 >
        <CursorAnimation/>
        <HeroPage />
        <Services />
        <Footer/>
      </h1>
    </div>
  );
};

export default Home;
