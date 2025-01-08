
import HeroPage from "../components/HeroPage";
import Services from "../components/Services";
import React, { Suspense } from "react";
const Testimonials = React.lazy(() => import("../components/Testimonial"));
const ContactLink = React.lazy(() => import("../components/ContactLink"));

import About from "../components/About";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      
      <HeroPage />

      <About />
      <Services />
      <Suspense
        fallback={<div className="bg-black text-white">Loading...</div>}
      >
        <Testimonials />
        <ContactLink />
      </Suspense>
    </div>
  );
};

export default Home;
