import { useEffect, useState } from "react";
import { navdData } from "../Helpers/Data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div>
      <div
        className={`${bgColor} duration-500 ease-in-out flex fixed z-50 items-center justify-between w-full p-12`}
      >
        <button
          onClick={toggleSidebar}
          className="text-white p-3 rounded-full focus:outline-none z-50"
        >
          {isSidebarOpen ? (
            <span className="text-2xl">&times;</span>
          ) : (
            <>
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
            </>
          )}
        </button>

        <div className="flex items-center space-x-4">
          <Link to="/">
            <img
              src="/logo.jpeg"
              alt="Logo"
              height={50}
              width={50}
              className="mx-auto"
            />
          </Link>
        </div>
        <div></div>
      </div>

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{
          x: isSidebarOpen ? 0 : "-100%",
          opacity: isSidebarOpen ? 1 : 0,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
        className="fixed top-0 left-0 w-screen h-full bg-black text-white z-40 shadow-lg flex items-center justify-center lg:items-center lg:justify-center"
      >
        <div className="p-6 lg:p-0 space-y-10 text-center">
          {/* Navigation Links */}
          <ul className="space-y-4 mt-24 lg:mt-0 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 items-center justify-center">
            {navdData.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="block text-lg lg:text-4xl font-thin hover:text-[#c4a053] transition-colors"
                  onClick={toggleSidebar}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
