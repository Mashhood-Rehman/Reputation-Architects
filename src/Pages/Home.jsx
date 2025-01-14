import HeroPage from "../components/HeroPage";
import Services from "../components/Services";
import React, { Suspense } from "react";
const Testimonials = React.lazy(() => import("../components/Testimonial"));
const ContactLink = React.lazy(() => import("../components/ContactLink"));
const Stats = React.lazy(() => import("../Helpers/Stats"));

import About from "../components/About";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import CursorAnimation from "../Helpers/CursorAnimation";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Helmet>
        <title>
          Reputation Architects | Boost Online Reputation & Brand Growth
        </title>
        <meta
          name="description"
          content="Build your online presence, elevate your reputation, and grow your business with powerful marketing strategies from Reputation Architects."
        />
      </Helmet>

      <CursorAnimation />
      <HeroPage />

      <About />
      <Services />
      <Suspense
        fallback={<div className="bg-black text-white">Loading...</div>}
      >
        <Stats />

        <Testimonials />
        <ContactLink />
      </Suspense>
    </div>
  );
};

export default Home;
