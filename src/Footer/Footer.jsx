import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const galleryImages = [
  "/G1.webp",
  "/G2.webp",
  "/G3.webp",
  "/G4.webp",
  "/G5.webp",
  "/G6.webp",
];

const Footer = () => {
  return (
    <div className="relative bg-black bg-opacity-90 bg-[url('/Footer.webp')] bg-cover bg-center">
      <div className="absolute inset-0"></div>
      <div className="max-w-screen-xl flex flex-col-reverse mx-auto p-4 sm:p-6 lg:p-12">
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info Section */}
          <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-10">
            <Link to="/">
              <img src="/Main-Logo.webp" alt="Logo" width={120} height={50} />
            </Link>
            <p className="text-white text-xs sm:text-sm lg:text-base">
              Digital Agency with creative ideas and great team support.
            </p>
          </div>

          {/* About Us Section */}
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white mt-6 sm:mt-10">
              About Us
            </h4>
            <ul className="space-y-2 mt-2 sm:mt-4 text-white text-xs sm:text-sm">
              {["Our Story", "Mission and Values", "Team", "Testimonials"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-[#f97316] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services Gallery Section */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl lg:text-2xl text-white font-semibold mt-6 sm:mt-10">
              Our Services
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
              {galleryImages.map((src, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-md aspect-[4/3]"
                >
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl lg:text-2xl text-white font-semibold mt-6 sm:mt-10">
              Contact Us
            </h3>
            <div className="text-white space-y-2 sm:space-y-4 text-xs sm:text-sm">
              <p>301 Princes Street, Damietta</p>
              <p>Egypt-104</p>
              <p>+92-207-823-7766</p>
              <p>info@example.com</p>
              <div className="flex gap-4">
                {[
                  { icon: "logos:facebook", url: "#" },
                  { icon: "logos:twitter", url: "#" },
                  { icon: "logos:linkedin", url: "#" },
                  { icon: "logos:skype", url: "#" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    to={social.url}
                    className="hover:text-[#f97316] transition transform hover:-translate-y-1 duration-300"
                  >
                    <Icon icon={social.icon} className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 sm:my-8 lg:my-12 border-gray-700" />

        {/* Newsletter Section */}
        <div className="text-center text-white space-y-4 sm:space-y-6 max-w-sm mx-auto">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
            Newsletter
          </h3>
          <p className="text-xs sm:text-sm">
            Subscribe to our newsletter and stay up to date with the latest
            news, updates, and exclusive offers. Get valuable insights. Join our
            community today!
          </p>
          <div className="bg-gray-800 flex   items-center px-3 py-2 rounded-full space-y-3 sm:space-y-0 sm:space-x-3">
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="flex-grow z-50 bg-transparent text-xs sm:text-sm text-white outline-none pl-2"
            />
            <button
              type="button"
              className="bg-[#f97316] hover:bg-orange-600 text-white text-xs sm:text-sm rounded-full px-4 py-2 transition-all tracking-wide"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
