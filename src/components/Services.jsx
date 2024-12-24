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
    icon: "tabler:seo",
    title: "Web Development",
    description:
      "Create stunning, responsive websites that offer seamless user experiences, optimized for performance and speed.",
  },
  {
    icon: "tabler:seo",
    title: "Digital Marketing",
    description:
      "Boost your brand’s online presence with effective digital marketing strategies including social media and email campaigns.",
  },
  {
    icon: "tabler:seo",
    title: "Digital Marketing",
    description:
      "Boost your brand’s online presence with effective digital marketing strategies including social media and email campaigns.",
  },
  {
    icon: "tabler:seo",
    title: "Digital Marketing",
    description:
      "Boost your brand’s online presence with effective digital marketing strategies including social media and email campaigns.",
  },
];

const Services = () => {
  return (
    <div className="bg-black text-white">
      <div className="p-6 md:p-24">
        <div className="space-y-4">
          <span className="border text-xs bg-gradient-to-r from-[#f97316] to-transparent border-white px-3 py-1 rounded-xl">
            Our Services
          </span>
          <h1 className="text-lg md:text-2xl">What We Offer?</h1>
          <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
            <p className="text-sm md:w-96">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              cumque repellat nisi repudiandae ullam qui architecto debitis quas
              sed, doloremque voluptate libero ad nihil animi?
            </p>
            <Link
              to="/Services"
              className="flex border hover:scale-110 hover:border-none bg-black hover:bg-[#f97316]  border-white text-xs rounded-full py-1 px-2 items-center justify-center space-x-1 cursor-pointer  duration-300 ease-in-out"
            >
              <button className="text-white">Services</button>
              <Icon icon="mdi-light:arrow-right" width="24" height="24" />
            </Link>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="border duration-300 ease-in-out bg-black hover:bg-[#f97316] hover:text-black border-white rounded-lg p-4 space-y-6"
              >
                <Icon
                  icon={service.icon}
                  width="40"
                  height="40"
                  className="border border-white rounded-full p-1"
                />
                <p className="text-xs">{service.description}</p>
                <p>{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

