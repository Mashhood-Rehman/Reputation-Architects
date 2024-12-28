import { motion, useTransform, useScroll } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import CircleLogo from '/src/components/CircleLogo.jsx';
import { Link } from "react-router-dom";

const HeroPage = () => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 80, 200]);
  const triangles = [
    { top: "10%", left: "10%", rotate: 0 },
    { top: "20%", right: "15%", rotate: 45 },
    { bottom: "30%", left: "20%", rotate: 180 },
    { top: "40%", right: "10%", rotate: 90 },
   
  ];

  return (
    <div className="bg-[url('/b4.jpg')] h-[70vh] lg:h-[100vh] bg-fixed  bg-center bg-cover  relative">
       {triangles.map((triangle, index) => (
        <motion.div
          key={index}
          className="absolute w-0 h-0"
          style={{
            top: triangle.top,
            left: triangle.left,
            right: triangle.right,
            bottom: triangle.bottom,
            transform: `rotate(${triangle.rotate}deg)`,
            borderLeft: "8px solid transparent",
            borderRight: "8px solid transparent",
            borderBottom: "16px solid rgb(249, 115, 22)", // orange-500
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Social Media Icons */}
      <span className="absolute left-6 lg:right-6 top-1/2 transform -translate-y-1/2 flex-col my-5 space-y-10 z-50 hidden lg:flex">
        <a
          href="https://www.facebook.com/profile.php?id=61566739650180"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Facebook profile"
        >
          <img
            src="/fb11-min.webp"
            className="h-auto w-4 p-1 hover:text-orange-500 text-white"
            alt="Visit our Facebook profile"
            width="50"
            height="50"
          />
        </a>
        <a
          href="https://www.instagram.com/xsuite.digital/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Instagram profile"
        >
          <img
            src="/instaram-icon.webp"
            className="h-6 w-6 p-1 hover:text-orange-500 text-white"
            alt="Visit our Instagram profile"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/xsuite-digital/about/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our LinkedIn profile"
        >
          <img
            src="/inn-min.webp"
            className="h-8 w-7 p-1 hover:text-orange-500 text-white"
            alt="Visit our LinkedIn page"
          />
        </a>
      </span>
      <motion.div
        className="fixed lg:left-5 top-1/4 w-full flex items-center justify-center"
        style={{ opacity, scale, y }}
      >
        <div className="text-white text-left">
          <motion.h1
            className=" text-3xl  mr-6 lg:mr-0   lg:text-6xl font-bold mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Reputation Architects
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-orange-500  text-lg sm:text-lg md:text-xl lg:text-4xl lg:leading-normal font-semibold ">
                <span className="text-white">
                  Crafting Digital Success Brick by Brick<br /> in{" "}
                </span>
                
                <TypeAnimation
                  sequence={[
                    "Digital Marketing",
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
                  className=""
                />
              </h1>
            </div>
          </motion.div>

        
          <motion.div
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="mt-12 sm:mt-4 flex"
>
  <Link href="/Contact">
    <div className="mt-3 left-6">
      <button className="relative text-white hover:text-orange-500 font-bold group">
        Get a Quote →
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
      </button>
    </div>
  </Link>
</motion.div>

        </div>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-1 h-full bg-white origin-top"
        style={{ scaleY: scrollYProgress }}
      />
      <div className="absolute bottom-5 right-5 hidden sm:block">
        <CircleLogo />
      </div>
    </div>
  );
};

export default HeroPage;


