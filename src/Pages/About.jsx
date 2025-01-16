import { Link } from "react-router-dom";
import Stats from "../Helpers/Stats";
import Team from "../Helpers/ABOUTData/Team";
import WhoWeAre from "../Helpers/ABOUTData/WhoWeAre";
import { useEffect } from "react";
import AboutMarqee from "../Helpers/ABOUTData/AboutMarqee";
import { Helmet } from "react-helmet";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Learn more about our digital marketing agency in Austin. Discover who we are, our expert team, and how we help businesses grow with custom marketing strategies."
        />
        <title>About Us | Reputation Architects LLC</title>
      </Helmet>
      <div className="h-[10vh] bg-black flex flex-col space-y-4 items-center justify-center">
        <h1 className="text-white font-semibold text-5xl font-[sans-serif]">
          About Us
        </h1>
      </div>
      <div>
        <AboutMarqee />
        <WhoWeAre />
        <Team />
        <Stats />
      </div>
    </>
  );
};

export default About;
