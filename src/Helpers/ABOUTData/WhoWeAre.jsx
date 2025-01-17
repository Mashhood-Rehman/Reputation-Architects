import { motion } from "framer-motion";
const WhoWeAre = () => {
  return (
    <section className="py-12 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold uppercase text-orange-500">
          Who We Are
        </h2>
        <p className="mt-4 text-white italic">
          At Reputation Architects LLC, we specialize in transforming online
          presences through cutting-edge digital solutions. Our expertise spans
          SEO, web development, reviews management, social media marketing, and
          Google Business verification.
        </p>
        <div className="w-16 h-1 bg-orange-500 mx-auto mt-4"></div>
      </div>

      <div className="mt-12 flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-1/2 p-6">
          <p className="text-white">
            Our mission is to empower businesses with tools and strategies to
            thrive in the digital landscape. We deliver tailored solutions that
            boost visibility, credibility, and growth.
          </p>
          <ul className="mt-8 space-y-6">
            {[
              {
                title: "SEO Services",
                description:
                  "Enhance your search engine rankings and attract more customers with our proven SEO strategies.",
              },
              {
                title: "Web Development",
                description:
                  "Create responsive, modern websites designed to captivate and convert your audience.",
              },
              {
                title: "Reviews Management",
                description:
                  "Build trust with potential clients by managing and showcasing positive reviews effectively.",
              },
              {
                title: "Social Media Marketing",
                description:
                  "Expand your brand’s reach with engaging social media campaigns tailored to your audience.",
              },
              {
                title: "Google Business Verification",
                description:
                  "Get your business verified on Google and improve your local visibility to attract nearby customers.",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-500 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="font-bold text-white">{item.title}</h4>
                  <p className="text-white">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="group relative w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
          <img
            src="/G3.webp"
            alt="Example Image"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <motion.div
            className="absolute -right-8 -bottom-8 bg-orange-500 rounded-xl p-4 shadow-lg w-48"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-orange-500" />
              <span className="text-sm font-medium text-black"></span>
            </div>
          </motion.div>
          <motion.div
            className="absolute -left-8 -top-8 bg-orange-500 rounded-xl p-4 shadow-lg w-48"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-orange-500" />
              <span className="text-sm font-medium text-black"></span>
            </div>
          </motion.div>
          <div className="absolute inset-0 bg-white/10 transition-all duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
