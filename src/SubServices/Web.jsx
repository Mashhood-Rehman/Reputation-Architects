import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cards } from "../Helpers/Data";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Web() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white flex flex-col items-center px-4 py-8 sm:px-6 lg:px-16 lg:gap-12">
      <div className="flex flex-col mt-10 lg:flex-row items-center justify-between w-full max-w-6xl gap-8 lg:gap-16 bg-black rounded-xl p-6 lg:p-12 shadow-lg relative">
        <div className="w-full mt-5  flex justify-start lg:absolute lg:top-4 lg:left-4 mb-8 lg:mb-0">
          <Link
            to="/services"
            className="text-white hover:text-orange-500 transition duration-300 flex items-center"
          >
            <Icon icon="si:arrow-left-line" className=" mr-2 text-sm" />
            <span className="text-sm ">Back to Services</span>
          </Link>
        </div>

        <div className="group m-8 relative w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
          <img
            src="/Web2.webp"
            alt="Example Image"
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
          <motion.div
            className="absolute -right-8 -bottom-8 bg-orange-500 rounded-xl p-4 shadow-lg w-48"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-orange-500" />
              <span className="text-sm font-medium text-black">
                Innovation First
              </span>
            </div>
          </motion.div>
          <motion.div
            className="absolute -left-8 -top-8 bg-orange-500 rounded-xl p-4 shadow-lg w-48"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-orange-500" />
              <span className="text-sm font-medium text-black">
                Future Ready
              </span>
            </div>
          </motion.div>
          <div className="absolute inset-0 bg-white/10 transition-all duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col justify-center">
          <h1 className="text-2xl lg:text-4xl font-extrabold mb-4">
            Website
            <span className="text-orange-500 ml-2">Development</span> Services
          </h1>
          <p className="text-gray-300 text-sm lg:text-lg mb-6">
            Maximize your brand&apos;s reach with our comprehensive digital
            marketing strategies.
          </p>
          <ul className="text-sm lg:text-lg text-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {[
              "Custom Website Design",
              "E-Commerce Solutions",
              "Responsive Web Development",
              "Mobile Web Development",
              "Content Management System (CMS) Development",
            ].map((item, index) => (
              <li key={index} className="group flex items-center">
                <span className="text-orange-500 mr-2">→</span>
                <span className="relative text-gray-300 group-hover:text-orange-500 transition-all duration-300">
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl lg:text-4xl text-center font-extrabold text-white mb-3">
          Services <span className="text-orange-500">Overview</span> <br />
        </h1>
        <p className="text-gray-300  text-sm sm:text-base leading-relaxed">
          Xsuite Digital offers cutting-edge Digital Marketing Services designed
          to enhance your online presence and amplify your brand&apos;s digital
          footprint. We specialize in creating and managing data-driven
          marketing campaigns that drive engagement, boost conversions, and
          foster meaningful connections with your target audience. Our expertise
          includes SEO, SMM, and PPC advertising, ensuring your business thrives
          in the competitive digital landscape. With a focus on measurable
          results and innovative strategies, Xsuite Digital helps your brand
          achieve sustainable growth and stand out in today&apos;s dynamic
          online market.
        </p>
      </div>

      <div className="bg-black w-full max-w-6xl  mt-0 rounded-lg shadow-lg p-8 sm:p-10 lg:p-16 lg:grid lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl flex items-center space-x-3    lg:text-4xl font-extrabold text-white mb-6">
            Our <span className="text-orange-500">Services</span> Expertise
          </h1>
          <ul className="text-sm lg:text-lg text-gray-300   gap-y-4 gap-x-8">
            {[
              "Custom Website Design: Create personalized websites to meet your business goals and attract your audience.",
              "E-Commerce Solutions: Develop online stores with seamless functionality for better user experience.",
              "Responsive Web Development: Build websites optimized for all devices and browsers.",
              "Diverse Website Types: From blogs and personal sites to corporate, business, and informational platforms.",
            ].map((item, index) => (
              <li key={index} className="group flex items-start">
                <span className="text-orange-500 mr-2">→</span>
                <span className="relative text-gray-300 group-hover:text-white transition-all duration-300">
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="group relative w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
            <img
              src="/Web4.webp"
              alt="Example Image"
              className="w-full h-[300px] object-contain transition-transform duration-500 group-hover:scale-110"
            />
            <motion.div
              className="absolute -right-8 -bottom-8 bg-orange-500 rounded-xl p-4 shadow-lg w-48"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-orange-500" />
                <span className="text-sm font-medium text-black"></span>
              </div>
            </motion.div>
            <motion.div
              className="absolute -left-8 -top-8 bg-orange-500 rounded-xl p-4 shadow-lg w-48"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-orange-500" />
                <span className="text-sm font-medium text-black"></span>
              </div>
            </motion.div>
            <div className="absolute inset-0 bg-white/10 transition-all duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {" "}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mt-12 w-full max-w-6xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-orange-500 mb-"></h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-black text-white rounded-lg p-6 relative shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="absolute w-full -top-6  flex items-center justify-start  border-gray-300 bg-black">
                {React.createElement(card.icon, {
                  className:
                    "p-2 text-gray-300 w-12 h-12  text-orange-500 rounded-full border-dotted border-2",
                })}
              </div>
              <h1 className="text-xl font-extrabold mt-8 mb-4 text-left">
                {card.title}
              </h1>
              <p className="text-gray-300 text-left text-sm leading-relaxed">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
