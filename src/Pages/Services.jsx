import { useEffect } from "react";
import ServicesCard from "../SERVICESData/ServicesCard";
import WorkProcess from "../Helpers/WorkProcess";
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

      <div className=" h-[10vh] lg:pt-48  pt-28 bg-black flex flex-col space-y-4 items-center justify-center">
        <h1 className="text-white text-5xl font-semibold font-[sans-serif]">
          Our Services
        </h1>
      </div>
      <div>
        <ServicesCard />
        <WorkProcess />
      </div>
    </>
  );
};

export default Services;
