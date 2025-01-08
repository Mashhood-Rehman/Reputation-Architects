import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

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
    <div
      className={`fixed bottom-24 right-4 z-50 transition-transform duration-500 ease-in-out ${
        visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      {visible && (
        <Link
          to="https://wa.me/+15123632731"
          target="_blank"
          rel="noopener noreferrer"
          className="z-50 flex items-center justify-center h-16 w-16 bg-green-500 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <Icon icon="tabler:message-circle" width={32} color="white" />
        </Link>
      )}
    </div>
  );
};

export default ChatIcon;
