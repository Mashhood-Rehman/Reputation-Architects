
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { servicesInfo } from "../Helpers/Data";

function ServicesCard() {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  console.log("Services Info:", Array.isArray(servicesInfo), servicesInfo);

  return (
    <section className="w-full bg-black px-4 py-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {servicesInfo &&
            servicesInfo.map((service, index) =>
              service.isTitle ? (
                <motion.div
                  key={index}
                  className="relative p-6"
                  variants={cardVariants}
                >
                  <div className="text-white">
                    <h2 className="text-3xl font-bold md:text-4xl">
                      {service.content.title}
                      <br />
                      <span className="text-orange-500">
                        {service.content.subtitle}
                      </span>
                    </h2>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={index}
                  className="group relative border border-white/10 hover:border-orange-500/20 p-6 transition-all"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Dynamically rendering the icon */}
                  <div className="mb-4 text-orange-500">
                    {service.icon && service.icon()}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400">{service.description}</p>
                  <Link to={`/Services/${service.path}`}>
                  <div className="absolute bottom-1 right-6 flex items-center text-orange-500 cursor-pointer hover:underline">
                      <span>View Details</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 ml-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              )
            )}
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesCard;
