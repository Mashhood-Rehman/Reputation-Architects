import { useEffect, useState } from "react";
import { navdData } from "../Helpers/Data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react"; // Import Iconify

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [bgColor, setBgColor] = useState("bg-black");

  useEffect(() => {
    const handleScroll = () => {
      if (window.location.pathname === "/") {
        if (window.innerWidth >= 1140) {
          if (window.scrollY > 50) {
            setBgColor("bg-black");
          } else {
            setBgColor("bg-transparent");
          }
        }
      } else {
        setBgColor("bg-black");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div>
      {/* Navbar */}
      <div
        className={`${bgColor} duration-500 ease-in-out flex fixed z-50 items-center justify-between w-full p-6 md:p-12`}
      >
        {/* Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="text-white p-3 rounded-full focus:outline-none z-50"
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isSidebarOpen ? (
            <Icon icon="mdi:close" className="text-3xl text-white z-20" />
          ) : (
            <Icon icon="mdi:menu" className="text-3xl" />
          )}
        </button>

        <div className="flex items-center space-x-4">
          <Link to="/">
            <img
              src="/Main-Logo.webp"
              alt="Logo"
              className="h-12 w-12 md:h-20 md:w-20 object-contain"
            />
          </Link>
        </div>
        <div></div>
      </div>

      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{
          x: isSidebarOpen ? 0 : "-100%",
          opacity: isSidebarOpen ? 1 : 0,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
        className="fixed top-0 left-0 w-screen h-full bg-black bg-opacity-90 text-white z-40 flex items-center justify-center"
      >
        <ul className="space-y-10 mt-24 text-center">
          {navdData.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className="block text-lg lg:text-4xl hover:text-[#f97316] duration-300"
                onClick={toggleSidebar}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
