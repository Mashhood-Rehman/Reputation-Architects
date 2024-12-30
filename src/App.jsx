import { Route, Routes } from "react-router-dom";
import Services from "./Pages/Services";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ChatIcon from "./Helpers/ChatIcon";
import Packages from "./Pages/Packages";
import ServiceDetails from "./SubServices/ServicesDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/Services"
          element={
            <div className="pt-24 md:pt-32">
              <Services />
            </div>
          }
        />
        <Route path="/Services/:id" element={<ServiceDetails />} />

        <Route
          path="/about"
          element={
            <div className="pt-24 md:pt-32">
              <About />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="pt-24 md:pt-32">
              <Contact />
            </div>
          }
        />
        <Route
          path="/packages"
          element={
            <div className="pt-24 md:pt-32">
              <Packages />
            </div>
          }
        />
      </Routes>
      <ChatIcon />
    </>
  );
};

export default App;
