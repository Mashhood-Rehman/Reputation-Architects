import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { memo } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const HeroPage = () => {
  return (
    <div className="bg-[url('/b4.webp')] h-[70vh] lg:h-[100vh] bg-fixed bg-center bg-cover relative">
      <span className="absolute z-10 space-y-8 lg:flex lg:flex-col top-1/3 left-4 hidden">
        <Link
          to="https://www.facebook.com/profile.php?id=61571549906577"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Facebook page"
        >
          <Icon
            className="text-white hover:text-orange-500 duration-300 ease-in-out "
            icon="basil:facebook-outline"
            width="24"
            height="24"
          />
        </Link>
        <Link
          to="https://www.instagram.com/reputationarchitectsllc/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Instagram profile"
        >
          <Icon
            icon="jam:instagram"
            width="24"
            height="24"
            className="text-white hover:text-orange-500 duration-300 ease-in-out "
          />
        </Link>
        <Link
          to="https://www.linkedin.com/in/reputation-architects-llc-251498344/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our LinkedIn profile"
        >
          <Icon
            icon="basil:linkedin-outline"
            width="24"
            height="24"
            className="text-white hover:text-orange-500 duration-300 ease-in-out "
          />
        </Link>
        <Link
          to="https://x.com/LlcReputation"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Twitter profile"
        >
          <Icon
            icon="prime:twitter"
            width="18"
            height="18"
            className="text-white hover:text-orange-500 duration-300 ease-in-out "
          />
        </Link>
      </span>

      <motion.div className="w-full h-full flex items-center  p-2 justify-center">
        <div className="text-white text-center">
          <motion.div
            className=" mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img
              height={500}
              width={500}
              src="/heroimg.webp"
              alt="Reputation-image"
              className="w-full max-w-[300px]  sm:max-w-[700px] ml-6 lg:ml-0   md:max-w-[600px] lg:max-w-[1000px] "
            />
          </motion.div>

          <motion.div>
            <div className="flex flex-col  items-center  justify-center ">
              <h1 className="text-orange-500  text-3xl  sm:text-4xl md:text-4xl lg:text-4xl lg:leading-normal font-extrabold text-center sm:text-left">
                <span className="text-white    ">
                  Crafting Digital Brilliance Brick by Brick in{" "}
                </span>
                <br />

                <TypeAnimation
                  sequence={[
                    "Digital Marketing",
                    1000,
                    "Google Ads",
                    1000,
                    "PPC Campaigns",
                    1000,
                    "Social Media Marketing",
                    1000,
                    "Web Development",
                    1000,
                    "Graphic Design",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="  "
                />
              </h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 sm:mt-4 flex items-center justify-center"
          >
            <Link to="/Contact">
              <button className="relative text-orange-500 border-2 border-orange-500 py-2 px-4 rounded-3xl flex items-center justify-center hover:bg-orange-500 duration-300 ease-in-out hover:text-white font-bold group">
                Get a Quote →
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default memo(HeroPage);
