import { Link } from "react-router-dom";
import Stats from "../Helpers/Stats";
import Team from "../Helpers/ABOUTData/Team";
import WhoWeAre from "../Helpers/ABOUTData/WhoWeAre";
import { useEffect } from "react";
import AboutMarqee from "../Helpers/ABOUTData/AboutMarqee";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="h-[60vh] bg-black flex flex-col space-y-4 items-center justify-center">
        <h1 className="text-white text-5xl font-[sans-serif]">ABOUT US</h1>
        <div className=" flex items-center text-lg font-[sans-serif] justify-center z-10">
          <Link className=" text-white hover:text-orange-500 duration-300 ease-in-out  mr-2">
            Home
          </Link>
          <span className=" text-orange-500  ">/ About Us</span>
        </div>
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
