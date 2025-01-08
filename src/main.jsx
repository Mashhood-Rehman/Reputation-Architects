import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Header/Navbar.jsx";
import Footer from "./Footer/Footer.jsx";
import FAQ from "./Helpers/FAQ.jsx";
import CursorAnimation from "./Helpers/CursorAnimation";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <CursorAnimation ClassName="hidden lg-block"/>
      <Navbar />
      <App />
      <FAQ />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
