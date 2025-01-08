import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cards } from "../Helpers/Data";
import { Icon } from "@iconify/react/dist/iconify.js";

const GoogleBusinessVerification = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white flex flex-col items-center px-4 py-8 sm:px-6 lg:px-16 lg:gap-12">
      <div className="flex mt-11 flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-8 lg:gap-16 bg-black rounded-xl p-6 lg:p-12 shadow-lg relative">
         <div className="w-full mt-4  flex justify-start lg:absolute lg:top-4 lg:left-4 mb-2 lg:mb-0">
                 <Link
                   to="/services"
                   className="text-white hover:text-orange-500 transition duration-300 flex items-center"
                 >
                   <Icon icon="si:arrow-left-line" className=" mr-2 text-sm" />
                   <span className="text-sm ">Back to Services</span>
                 </Link>
               </div>

        <div className="group relative w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
          <img
            src="/GoogleBusiness2.webp"
            alt="Example Image"
            height={300}
            width={300}
            className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
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
                Verified Presence
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
              
              </span>
            </div>
          </motion.div>
          <div className="absolute inset-0 bg-white/10 transition-all duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-extrabold mb-4">
            Google
            <span className="text-orange-500 ml-2">Business Verification</span>
          </h1>
          <p className="text-gray-300 text-sm lg:text-lg mb-6">
            Verify your business on Google and boost credibility
          </p>
          <ul className="text-sm lg:text-lg text-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {[
              "Claim Your Business Listing",
              "Verify Your Business Information",
              "Improve Search Visibility",
              "Build Trust with Customers",
              "Stand Out in Google Search",
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
        <p className="text-gray-300 pl-20 pr-20 text-sm sm:text-base leading-relaxed">
          Xsuite Digital offers Google Business Verification services designed
          to help your business gain credibility and visibility in Google search
          results. By verifying your business information with Google, you can
          ensure that potential customers can easily find your business online.
          Our services are focused on maximizing your brand’s trust and presence
          with Google’s powerful verification process.
        </p>
      </div>

      <div className="bg-black w-full max-w-6xl mt-0 rounded-lg shadow-lg p-8 sm:p-10 lg:p-16 lg:grid lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col justify-center mb-4">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-6">
            Our{" "}
            <span className="text-orange-500">
              Google Business Verification
            </span>{" "}
            Expertise
          </h1>
          <ul className="text-sm lg:text-lg text-gray-300 gap-y-4 gap-x-8">
            {[
              "Increased Visibility: Appear on Google Maps and search results.",
              "Customer Trust: Provide accurate, verified information to build credibility.",
              "Accurate Information: Ensure potential clients can find your business details easily.",
              "Improved SEO: Higher rankings due to accurate business details.",
            ].map((item, index) => (
              <li key={index} className="group flex items-center">
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
              src="/GoogleBusiness.webp"
              alt="Example Image"
              height={100}
              width={100}
              className="w-auto h-full object-cover transition-transform duration-500 group-hover:scale-110"
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

      <div className="mt-12 w-auto max-w-6xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-orange-500 mb-"></h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-black text-white rounded-lg p-6 relative shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="absolute w-full -top-6 flex items-center justify-start border-gray-300 bg-black">
                {React.createElement(card.icon, {
                  className:
                    "p-2 text-gray-300 w-12 h-12 text-orange-500 rounded-full border-dotted border-2",
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
};

export default GoogleBusinessVerification;
