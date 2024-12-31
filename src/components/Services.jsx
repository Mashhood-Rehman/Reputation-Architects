import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

// Service data to be mapped
const servicesData = [
  {
    icon: "tabler:seo",
    title: "Search Engine Optimization",
    description:
      "Enhance your online visibility and drive organic traffic to your website with our expert SEO strategies.",
  },
  {
    icon: "nimbus:marketing",
    title: "Marketing & Advertisement",
    description:
      "Boost your brand's online presence with effective marketing campaigns and advertisements.",
  },
  {
    icon: "tabler:report-analytics",
    title: "Reporting & Analysis",
    description:
      "Gain actionable insights with detailed reporting and analysis to track your progress.",
  },
];

const Services = () => {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <div className="max-w-6xl p-4 sm:p-6 md:p-16">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row  items-center space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex flex-col z-10 lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6 text-center lg:text-left">
            <h1 className="text-xl sm:text-2xl lg:w-1/2 md:text-5xl font-bold text-white">
              The right digital <span className="">partner</span> for success
            </h1>
            <p className="mt-4 lg:w-1/2 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit
              consectetur massa mauris molestie hac. Hac arcu amet nullam
              pellentesque. Urna eu suspendisse felis sodales sit non.
            </p>
          </div>
          <Link
            className="w-28 sm:w-32 z-30 h-12 sm:h-16 bg-black hover:bg-orange-500 duration-300 ease-in-out flex items-center justify-center border border-white rounded-full p-1"
            to="/Services"
          >
            View All
          </Link>
        </div>

        <div className="absolute top-12 left-14 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-orange-500 rounded-full z-0"></div>

        {/* Services Cards */}
        <div className="relative z-10 mt-8 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black border border-gray-300 rounded-lg p-4 sm:p-6 shadow-md flex flex-col items-center space-y-4"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 text-white rounded-full flex items-center justify-center">
                <Icon icon={service.icon} width="24" height="24" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-center">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-center text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Add padding to separate sections */}
    </div>
  );
};

export default Services;
