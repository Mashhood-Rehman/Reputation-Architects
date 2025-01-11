import HeroPage from "../components/HeroPage";
import Services from "../components/Services";
import React, { Suspense } from "react";
const Testimonials = React.lazy(() => import("../components/Testimonial"));
const ContactLink = React.lazy(() => import("../components/ContactLink"));

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
        <meta
          name="description"
          content="We are a top digital marketing agency in Austin, offering expert services in SEO, social media marketing, PPC, and web development to help your business grow online."
        />
        <title>Reputation Architects LLC | Boost Your Business</title>
      </Helmet>

      <CursorAnimation />
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
