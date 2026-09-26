import { Route, Routes } from "react-router-dom";
import Services from "./Pages/Services";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ChatIcon from "./Helpers/ChatIcon";
import Packages from "./Pages/Packages";
import ServiceDetails from "./SubServices/ServicesDetails";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Terms from "./Pages/Terms";
import Security from "./Pages/Security";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/Services"
          element={
            <div>
              <Services />
            </div>
          }
        />
        <Route path="/Services/:id" element={<ServiceDetails />} />

        <Route
          path="/about"
          element={
            <div>
              <About />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <Contact />
            </div>
          }
        />
        <Route
          path="/packages"
          element={
            <div>
              <Packages />
            </div>
          }
        />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/TermsOfServices" element={<Terms />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/Security" element={<Security />} />
        <Route path="/security" element={<Security />} />
      </Routes>
      <ChatIcon />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
