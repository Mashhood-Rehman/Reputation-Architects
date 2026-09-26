import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Footer = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailData = {
      ...formData,
      to_email: import.meta.env.VITE_TO_EMAIL,
    };
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID,
        emailData,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          toast.success("Message sent successfully!");
          setFormData({ email: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
          toast.error("Failed to send the message. Please try again later.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <footer className="font-sans tracking-wide bg-black py-20">
        <div className="container mx-auto flex flex-col item-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 w-full max-w-7xl mx-auto px-4 sm:px-6">
            {/* Company Logo and Newsletter Subscription */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
              <Link to="/" className="inline-block mb-3">
                <img src="/Main-Logo.webp" alt="Logo" width={120} height={50} />{" "}
              </Link>

              <p className="text-white text-xs sm:text-sm lg:text-base leading-relaxed">
                Digital Excellence, Creative Ideas, and Strong Team Support-
                Your Success Starts Here.{" "}
              </p>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="mt-6 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 w-full"
              >
                <input
                  onChange={handleInputChange}
                  name="email"
                  type="email"
                  value={formData.email}
                  placeholder="Enter your email"
                  className="bg-white text-gray-900 placeholder-gray-500 px-4 py-2 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-4 py-2 ${
                    loading ? "bg-gray-400" : "bg-white"
                  } text-black font-semibold rounded-md hover:bg-orange-600 hover:text-white transition-colors cursor-pointer shrink-0`}
                >
                  {loading ? "Sending..." : "Subscribe"}
                </button>
              </form>
            </div>

            {/* Get in Touch */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
              <h4 className="text-white font-semibold text-lg pb-1 border-b-2 border-orange-500 inline-block mb-2">
                Get In Touch
              </h4>
              <ul className="space-y-2 mt-4 text-gray-300 text-sm">
                <li>
                  <a
                    href="mailto:info@rep-architects.com"
                    className="hover:text-white transition-colors"
                  >
                    <strong className="text-orange-500">Email:</strong>{" "}
                    info@rep-architects.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/+12148987958"
                    target="_blank"
                    className="hover:text-white transition-colors"
                  >
                    <strong className="text-orange-500">Phone:</strong> +1 (214)
                    898-7958
                  </a>
                </li>
                <li>
                  <strong className="text-orange-500"> Timing:</strong> Mon-Sat:
                  9am-5pm
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/fmmTxXrW8cxY4WUcA"
                    target="_blank"
                    className="hover:text-white transition-colors"
                  >
                    <strong className="text-orange-500"> Location:</strong> 5900
                    Balcones Drive # 20546 Austin, TX 78731
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
              <h4 className="text-white font-semibold text-lg pb-1 border-b-2 border-orange-500 inline-block mb-2">
                Services
              </h4>
              <ul className="space-y-2 mt-4 text-gray-300 text-sm">
                <li>
                  <Link to="/Services/SEO" className="hover:text-white transition-colors">
                    SEO
                  </Link>
                </li>

                <li>
                  <Link to="/Services/Web" className="hover:text-white transition-colors">
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Services/Reviews%20Management"
                    className="hover:text-white transition-colors"
                  >
                    Reviews Management
                  </Link>
                </li>
                <li>
                  <Link to="/Services/SocialMedia" className="hover:text-white transition-colors">
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Services/Google%20Business%20Verification"
                    className="hover:text-white transition-colors"
                  >
                    Google My Business Verification
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
              <h4 className="text-white font-semibold text-lg pb-1 border-b-2 border-orange-500 inline-block mb-2">
                Follow Us
              </h4>
              <ul className="mt-4 space-y-3 text-gray-300 text-sm">
                <li>
                  <Link
                    to="https://www.facebook.com/profile.php?id=61571549906577"
                    target="_blank"
                    className="flex items-center space-x-2 hover:text-white transition-colors"
                  >
                    <Icon
                      icon="ic:baseline-facebook"
                      className="h-6 w-6 text-white hover:text-orange-500 duration-300 ease-in-out"
                    />
                    <span>Facebook</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.instagram.com/reputationarchitectsllc/"
                    target="_blank"
                    className="flex items-center space-x-2 hover:text-white transition-colors"
                  >
                    <Icon
                      icon="mdi:instagram"
                      className="h-6 w-6 text-white hover:text-orange-500 duration-300 ease-in-out"
                    />
                    <span>Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/in/reputation-architects-llc-251498344/"
                    target="_blank"
                    className="flex items-center space-x-2 hover:text-white transition-colors"
                  >
                    <Icon
                      icon="mdi:linkedin"
                      className="h-6 w-6 text-white hover:text-orange-500 duration-300 ease-in-out"
                    />
                    <span>LinkedIn</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://x.com/LlcReputation"
                    target="_blank"
                    className="flex items-center space-x-2 hover:text-white transition-colors"
                  >
                    <Icon
                      icon="prime:twitter"
                      className="h-6 w-6 text-white hover:text-orange-500 duration-300 ease-in-out"
                    />
                    <span>Twitter</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-10 border-gray-600 w-full" />

          <div className="flex items-center justify-center space-x-4 text-gray-300 text-sm">
            <Link to="/TermsOfServices" className="hover:text-white">
              Terms of Service
            </Link>
            <Link to="/PrivacyPolicy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/Security" className="hover:text-white">
              Security
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
