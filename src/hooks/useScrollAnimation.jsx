import { useEffect, useState } from "react";

export const useScrollAnimation = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;
      const maxScroll = fullHeight - windowHeight;
      const scrollPercentage = (scrollPosition / maxScroll) * 100;
      setScroll(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scroll;
};
