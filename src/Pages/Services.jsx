import { useEffect } from "react";
import ServicesCard from "../SERVICESData/ServicesCard";
import WorkProcess from "../Helpers/WorkProcess";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Explore our expert digital marketing services. From SEO and social media management to PPC and content marketing, we provide customized solutions to help your business succeed."
        />
        <title>Reputation Architects LLC | SEO, PPC & More | Austin, TX</title>
      </Helmet>

      <div className="h-[60vh] bg-black flex flex-col space-y-4 items-center justify-center">
        <h1 className="text-white text-5xl font-[sans-serif]">SERVICES</h1>
        <div className=" flex items-center text-lg font-[sans-serif] justify-center z-10">
          <Link className=" text-white hover:text-orange-500 duration-300 ease-in-out  mr-2">
            Home
          </Link>
          <span className=" text-orange-500  ">/ Services</span>
        </div>
      </div>
      <div>
        <ServicesCard />
        <WorkProcess />
      </div>
    </>
  );
};

export default Services;
