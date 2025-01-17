import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react"; // Import Iconify
import { navdData } from "../Helpers/Data";

const Sidebar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.location.pathname === "/") {
        if (window.scrollY > 50) {
          setBgColor("bg-black bg-opacity-80");
        } else {
          setBgColor("bg-transparent");
        }
      } else {
        setBgColor("bg-black ");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  // Framer Motion Variants
  const sidebarVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <div>
      {/* Navbar */}
      <div
        className={`${bgColor} duration-500 ease-in-out flex fixed z-50 items-center justify-between w-full p-4 md:p-6 backdrop-blur-md shadow-md`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              onClick={scrollToTop}
              src="/Main-Logo.webp"
              alt="Logo"
              className="h-10 w-10 md:h-14 md:w-14 object-contain"
            />
          </Link>
        </div>

        {/* Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="text-white p-2 rounded-full focus:outline-none z-50 hover:bg-gray-700 transition duration-300"
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isSidebarOpen ? (
            <Icon icon="mdi:close" className="text-3xl" />
          ) : (
            <Icon icon="mdi:menu" className="text-3xl" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black bg-opacity-95 backdrop-blur-lg flex items-center justify-center z-40"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={sidebarVariants}
        >
          <motion.ul
            className="space-y-6 text-center"
            initial="hidden"
            animate="visible"
          >
            {navdData.map((item, index) => (
              <motion.li
                key={item.name}
                variants={menuItemVariants}
                custom={index}
                className="hover:text-[#f97316] transition duration-300 hover:scale-105"
              >
                <Link
                  to={item.href}
                  className="text-xl md:text-3xl font-medium tracking-wide text-white"
                  onClick={toggleSidebar}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </div>
  );
};

export default Sidebar;
