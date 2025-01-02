import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailData = {
      ...formData,
      to_email: import.meta.env.VITE_TO_EMAIL,
    };

    // Ensure user_id is passed here
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailData,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send the message. Please try again later.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="z-50 flex flex-col bg-black min-h-screen justify-center p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="grid sm:grid-cols-2 items-center gap-8 p-6 sm:p-8 mx-auto max-w-5xl bg-gray-50 shadow-lg rounded-md font-sans"
      >
        {/* Left Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="text-center sm:text-left"
        >
          <div className="flex items-center justify-center sm:justify-start space-x-3">
            <div className="bg-orange-500 h-1 rounded-full w-12"></div>
            <h1 className="text-black text-2xl sm:text-3xl font-extrabold">
              Get in touch
            </h1>
          </div>
          <p className="text-sm text-gray-500 mt-4 leading-6">
            Have some big idea or brand to develop and need help? Reach out—we’d
            love to hear about your project and provide assistance.
          </p>

          {/* Email Section */}
          <div className="mt-8">
            <h2 className="text-gray-800 text-lg font-semibold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center justify-center sm:justify-start">
                <div className="bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <Icon
                    icon="mdi:email-outline"
                    width={20}
                    height={20}
                    color="#f97316"
                  />
                </div>
                <Link
                  to="mailto:info@reputation-architects.com"
                  className="text-orange-500 text-sm ml-4"
                >
                  <small className="block">Mail</small>
                  <strong>info@reputation-architects.com</strong>
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className="mt-8">
            <h2 className="text-gray-800 text-lg font-semibold">Socials</h2>
            <ul className="flex mt-4 justify-center sm:justify-start space-x-4">
              {[
                { icon: "mdi:facebook", label: "Facebook" },
                { icon: "mdi:instagram", label: "Instagram" },
                { icon: "mdi:twitter", label: "Twitter" },
              ].map((social, index) => (
                <li
                  key={index}
                  className="bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center shrink-0"
                >
                  <Link to="#" aria-label={social.label}>
                    <Icon
                      icon={social.icon}
                      width={20}
                      height={20}
                      color="#f97316"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right Section (Form) */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full text-gray-800 rounded-md py-3 px-4 border border-gray-300 text-sm focus:outline-orange-500 focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full text-gray-800 rounded-md py-3 px-4 border border-gray-300 text-sm focus:outline-orange-500 focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full text-gray-800 rounded-md py-3 px-4 border border-gray-300 text-sm focus:outline-orange-500 focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="6"
            className="w-full text-gray-800 rounded-md px-4 py-3 border border-gray-300 text-sm focus:outline-orange-500 focus:ring-2 focus:ring-orange-500"
            required
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`text-white ${
              isSubmitting ? "bg-gray-400" : "bg-orange-500 hover:bg-orange-600"
            } rounded-md text-sm px-4 py-3 w-full transition-all duration-300 ease-in-out`}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
