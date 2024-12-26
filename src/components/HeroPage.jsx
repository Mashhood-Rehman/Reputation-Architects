import { motion, useTransform, useScroll } from "framer-motion";

const HeroPage = () => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 80, 200]);

  return (
    <div className="bg-[url('/Hero-BG.webp')] h-[100vh] bg-fixed relative">
      <motion.div
        className="fixed  left-0 top-1/4 w-full  flex items-center justify-center"
        style={{ opacity, scale, y }}
      >
        <div className="text-white text-center ">
          <motion.h1
            className="text-6xl font-bold mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Reputation Architects
          </motion.h1>
          <motion.p
            className="text-xl text-orange-500 mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Crafting Digital Success Brick by Brick
          </motion.p>
          <motion.div
            className="w-16 h-16 mx-auto border-4 border-white rounded-full flex items-center justify-center"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-3 h-3 bg-white rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=" mt-28 flex items-center justify-center space-x-2 "
          >
            <button className=" border bg-black text-white hover:bg-orange-500 duration-300 ease-in-out  hover:text-black hover:border-none border-white rounded-2xl px-2 py-2">
              Get Started
            </button>
            <button className=" border bg-orange-500 text-black hover:bg-black hover:text-white duration-300 ease-in-out hover:border-none border-white rounded-2xl px-2 py-2">
              Our Services
            </button>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-1 h-full bg-white origin-top"
        style={{ scaleY: scrollYProgress }}
      />
    </div>
  );
};

export default HeroPage;
