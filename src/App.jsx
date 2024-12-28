import { Route, Routes } from "react-router-dom";
import Services from "./Pages/Services";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/services"
        element={
          <div className="pt-24 md:pt-32">
            <Services />
          </div>
        }
      />
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
    </Routes>
  );
};

export default App;
