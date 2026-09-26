import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const ChatIcon = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-4 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="https://wa.me/+12148987958"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform"
            >
              <Icon
                icon="fa-brands:whatsapp"
                className="h-16 w-16 text-green-500"
              />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <Link
        to="/booking.rep-architects.com"
        className="flex items-center gap-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-5 py-3 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 font-extrabold tracking-wide text-sm sm:text-base border border-orange-400/40 cursor-pointer"
      >
        <img
          src="/Calendar.webp"
          alt="Book a Meeting"
          className="w-6 h-6 object-contain"
        />
        <span className="font-extrabold text-white whitespace-nowrap drop-shadow-md">
          Book a Meeting
        </span>
      </Link>
    </div>
  );
};

export default ChatIcon;
