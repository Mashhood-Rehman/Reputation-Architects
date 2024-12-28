import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ContactLink = () => {
    // const [isHovered, setIsHovered] = useState(false);

    // useEffect(() => {
    //   console.log("Component mounted");
    //   return () => console.log("Component unmounted");
    // }, []);

     // Animated triangle positions
  const triangles = [
    { top: "10%", left: "10%", rotate: 0 },
    { top: "20%", right: "15%", rotate: 45 },
    { bottom: "30%", left: "20%", rotate: 180 },
    { top: "40%", right: "10%", rotate: 90 },
    { top: "10%", right: "15%", rotate: 0 },
    { top: "30%", right: "30%", rotate: 180 },
  ];
  return (
    <section className="container max-w-full bg-black mx-auto py-12 relative">
    
     {/* Animated triangles */}
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
      <div className="max-w-full mx-auto relative">
        {/* Image with orange shape container */}
        <div className="flex justify-center mb-8 md:mb-0">
          <div className="relative inline-flex items-center">
            {/* Image */}
            <img
        src="/p3-min.webp"
        alt="Profile"
        width={180}
  height={180}
  className="w-[180px] h-[180px] rounded-full z-10 object-cover"
/>
            
            {/* Custom orange shape with arrow */}
            <div className="absolute -right-24 top-0">
              <div className="relative">
                <svg width="172" height="170" className="w-[182px] h-[180px]" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Orange shape */}
                  <path 
                    d="M0 96C0 42.9807 42.9807 0 96 0C149.019 0 192 42.9807 192 96V192H96C42.9807 192 0 149.019 0 96Z" 
                    fill="#FF4500"
                  />
                  {/* Arrow */}
                  <path  
                    d="M96 96L136 136M136 136V96M136 136H96" 
                    stroke="white" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl text-white  md:text-5xl lg:text-6xl font-bold text-center mt-16 max-w-4xl mx-auto leading-tight">
          Have Any Projects In Mind? Get In Touch With Us!
        </h2>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0 120C240 120 480 0 720 0C960 0 1200 120 1440 120V120H0V120Z"
            fill="none"
            stroke="rgba(249, 115, 22, 0.2)" // orange-500 with opacity
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default ContactLink ;
