

import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, WebcamIcon as Skype } from 'lucide-react';
import React from 'react';

const galleryImages = [
  '/G1.webp', '/G2.webp', '/G3.webp', '/G4.webp', '/G5.webp', '/G6.webp',
];

const Footer = () => {
  return (
    <div>
      <div className="relative h-full bg-opacity-90 bg-black bg-[url('/Footer.webp')]">
        <div className="absolute inset-0"></div>
        <div className="max-w-screen-xl mx-auto px-4 sm:text-center lg:text-left items-center justify-center">
          <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and description */}
            <div className="space-y-6 mt-10 text-center lg:text-left">
              <Link to="/" className="block">
                <img src="/Main-Logo.webp" alt="Logo" width={120} height={50} className="mx-auto lg:mx-0" />
              </Link>
              <p className="text-white max-w-sm mx-auto lg:mx-0">
                Digital Agency with creative ideas and great team support.
              </p>
            </div>

            {/* About Us section */}
            <div className="text-center lg:text-left">
              <h4 className="text-base font-bold mb-6 text-white mt-10">About Us</h4>
              <ul className="space-y-2 z-10 text-white text-xl">
                <li>
                  <a href="#" className="hover:text-[#f97316] text-sm">Our Story</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#f97316] text-sm">Mission and Values</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#f97316] text-sm">Team</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#f97316] text-sm">Testimonials</a>
                </li>
              </ul>
            </div>

            {/* Gallery Section */}
            <div className="space-y-6 text-center lg:text-left">
              <h3 className="text-2xl text-white font-semibold mt-10">Our Services</h3>
              <div className="grid grid-cols-3 gap-4">
                {galleryImages.map((src, index) => (
                  <div key={index} className="relative group overflow-hidden rounded-md aspect-[4/3]">
                    <img
                      src={src}
                      alt={`Gallery image ${index + 1}`}
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Us section */}
            <div className="space-y-6 text-center lg:text-left">
              <h3 className="text-2xl text-white font-semibold mt-10">Contact Us</h3>
              <div className="space-y-4 text-white">
                <p>301 Princes Street, Damietta</p>
                <p>Egypt-104</p>
                <p>+92-207-823-7766</p>
                <p>info@example.com</p>
                <div className="flex justify-center lg:justify-start gap-4">
                  <Link to="#" className="hover:text-[#ff4a17] transition-colors transform hover:-translate-y-1 duration-300">
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link to="#" className="hover:text-[#ff4a17] transition-colors transform hover:-translate-y-1 duration-300">
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link to="#" className="hover:text-[#ff4a17] transition-colors transform hover:-translate-y-1 duration-300">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link to="#" className="hover:text-[#ff4a17] transition-colors transform hover:-translate-y-1 duration-300">
                    <Skype className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter section */}
          <hr className="my-12 border-gray-700" />
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white">Newsletter</h3>
            <p className="text-sm mt-4 text-white z-50">
              Subscribe to our newsletter and stay up to date with the latest news, updates, and exclusive offers. Get valuable insights. Join our community today!
            </p>
            <div className="bg-gray-800 flex flex-col sm:flex-row px-4 py-2 rounded-full text-left mt-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none bg-transparent text-sm pl-2 text-white mb-2 sm:mb-0 sm:mr-2"
              />
              <button
                type="button"
                className="bg-[#f97316] hover:bg-orange-600 text-white text-sm rounded-full px-4 py-2 transition-all tracking-wide"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
