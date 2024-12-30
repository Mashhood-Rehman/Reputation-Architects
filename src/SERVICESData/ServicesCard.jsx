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
  console.log("It is true", Array.isArray(servicesInfo), servicesInfo);
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
                    {/* <h2 className="text-3xl font-bold md:text-4xl">
                      {service.content.title}
                      <br />
                      <span className="text-orange-500 ">
                        {service.content.subtitle}
                      </span>
                    </h2> */}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={index}
                  className="group relative border border-white/10 hover:border-orange-500/20 p-6 transition-all "
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* <div className="mb-4 text-orange-500">{service.icon}</div> */}
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400">{service.description}</p>
                  <Link to={`/Services/${service.path}`}>
                    <button className="mt-2 hover:text-orange-500 duration-300 ease-in-out text-white">
                      View details
                    </button>
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
