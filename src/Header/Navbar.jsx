import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navdData } from "../Helpers/Data";
import Sidebar from "./Sidebar";
import { Icon } from "@iconify/react/dist/iconify.js";

const Navbar = () => {
  // Scroll-to-top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  // State for background color
  const [bgColor, setBgColor] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.location.pathname === "/") {
        if (window.scrollY > 50) {
          setBgColor("bg-black");
        } else {
          setBgColor("bg-transparent");
        }
      } else {
        setBgColor("bg-black");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <div
        className={`${bgColor} hidden duration-500 ease-in-out lg:flex fixed z-50 items-center justify-between w-full p-8`}
      >
        {/* Logo on the left side */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img
              onClick={scrollToTop}
              src="/Main-Logo.webp"
              alt="Logo"
              className="h-12 w-12 md:h-20 md:w-20 object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Navigation Links (Tabs) on the right side */}
        <div className="hidden md:flex space-x-8 text-white">
          {navdData.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="text-lg hover:text-[#f97316] duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex items-center text-white hover:text-orange-500 duration-300 ease-in-out">
          <Icon icon="ion:call-outline" className="h-6 w-6" />
          <a href="tel:+1(512)363-2731" className="ml-2">
            +1 (512) 363-2731
          </a>
        </div>
      </div>

      {/* Sidebar for smaller screens */}
      <div className="block lg:hidden">
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
