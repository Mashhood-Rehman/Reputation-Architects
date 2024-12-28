import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

function ServicesCard() {
  const services = [
    {
      isTitle: true,
      content: {
        title: "Unmatched Services.",
        subtitle: "Unmatched Excellence.",
      },
    },
    {
      icon: <Icon icon="mdi:code-tags"  className="h-8 w-8 text-white" />, // Web icon
      title: "Web Development",
      description:
        "Custom web solutions built with cutting-edge technologies to meet your digital transformation needs.",
    },
    {
      icon: <Icon icon="mdi:magnify" className="h-8 w-8 text-white" />, 
      title: "SEO Optimization",
      description:
        "Strategic search engine optimization to improve your visibility and drive organic traffic.",
    },
    {
      icon: <Icon icon="mdi:speaker"className="h-8 w-8 text-white" />, 
      title: "Social Media Marketing",
      description:
        "Engaging social media strategies to build your brand presence and connect with your audience.",
    },
    {
      icon: <Icon icon="mdi:earth" className="h-8 w-8 text-white" />, 
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing solutions to grow your online presence and reach.",
    },
    {
      icon: <Icon icon="mdi:chart-line" className="h-8 w-8 text-white" />, 
      title: "Google Ads",
      description:
        "Targeted advertising campaigns to maximize your ROI and drive qualified traffic.",
    },
  ];
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <section className="w-full bg-black px-4 py-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) =>
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
                    <span className="text-orange-500 ">
                    {service.content.subtitle}
                    </span>
                  </h2>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={index}
                className="group relative border border-white/10 hover:border-orange-500/20 p-6 transition-all "
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-4 text-orange-500">{service.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400">{service.description}</p>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesCard;