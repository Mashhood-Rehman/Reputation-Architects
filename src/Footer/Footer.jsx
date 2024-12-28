import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, WebcamIcon as Skype } from "lucide-react";

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
    <div className="relative h-screen bg-black bg-opacity-90 bg-[url('/Footer.webp')] bg-cover bg-center">
      <div className="absolute inset-0"></div>
      <div className="max-w-screen-xl flex flex-col-reverse  mx-auto p-8">
        <div className="grid gap-8 max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4">
          {/* Company Info Section */}
          <div className="space-y-6 mt-10">
            <Link to="/">
              <img
                src="/Main-Logo.webp"
                alt="Logo"
                width={120}
                height={50}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-white max-w-sm">
              Digital Agency with creative ideas and great team support.
            </p>
          </div>

          {/* About Us Section */}
          <div>
            <h4 className="text-base font-bold text-white mt-10">About Us</h4>
            <ul className="space-y-2 mt-4 text-white text-sm">
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
          <div className="space-y-6">
            <h3 className="text-2xl text-white font-semibold mt-10">
              Our Services
            </h3>
            <div className="grid grid-cols-3 gap-4">
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
          <div className="space-y-6">
            <h3 className="text-2xl text-white font-semibold mt-10">
              Contact Us
            </h3>
            <div className="text-white space-y-4">
              <p>301 Princes Street, Damietta</p>
              <p>Egypt-104</p>
              <p>+92-207-823-7766</p>
              <p>info@example.com</p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Linkedin, Skype].map((Icon, index) => (
                  <Link
                    key={index}
                    to="#"
                    className="hover:text-[#f97316] transition transform hover:-translate-y-1 duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <hr className="my-12 border-gray-700" />

        {/* Newsletter Section */}
        <div className="text-center text-white space-y-6 max-w-xl mx-auto">
          <h3 className="text-2xl font-bold">Newsletter</h3>
          <p className="text-sm">
            Subscribe to our newsletter and stay up to date with the latest
            news, updates, and exclusive offers. Get valuable insights. Join our
            community today!
          </p>
          <div className="bg-gray-800 flex items-center px-2 py-1.5 rounded-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-transparent text-sm text-white outline-none pl-4"
            />
            <button
              type="button"
              className="bg-[#f97316] hover:bg-orange-600 text-white text-sm rounded-full px-4 py-2 ml-4 transition-all tracking-wide"
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
