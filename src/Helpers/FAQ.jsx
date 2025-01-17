import { Icon } from "@iconify/react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question:
        "How does SEO help improve my website's ranking and visibility?",
      answer:
        "SEO (Search Engine Optimization) improves your website's ranking by optimizing content, keywords, backlinks, and technical aspects, making your website more search engine-friendly. This enhances visibility, attracts targeted traffic, and increases your chances of converting visitors into customers.",
    },
    {
      question:
        "Why is having a professionally developed website important for my business?",
      answer:
        "A professionally developed website ensures that your business has a fast, secure, and user-friendly online presence. It creates a positive first impression, improves user experience, and helps in showcasing your services effectively. A well-developed website also enhances credibility and drives customer engagement.",
    },
    {
      question: "How does review management improve my online reputation?",
      answer:
        "Review management helps you actively monitor, respond to, and improve customer feedback. Positive reviews build trust and attract new customers, while professionally handling negative reviews shows your commitment to customer satisfaction. This improves your overall online reputation and strengthens customer loyalty.",
    },
    {
      question: "How can social media marketing grow my business?",
      answer:
        "Social media marketing helps your business connect with a larger audience, build relationships, and increase brand awareness. By posting engaging content, running targeted campaigns, and analyzing performance metrics, you can drive traffic, generate leads, and convert followers into customers.",
    },
    {
      question:
        "What is Google My Business verification, and why is it important?",
      answer:
        "Google My Business (GMB) verification ensures your business appears on Google Maps and search results, making it easier for customers to find and contact you. Verification establishes trust, improves local SEO rankings, and helps your business stand out in local searches.",
    },
    {
      question:
        "Can you verify my Google My Business listing without video verification?",
      answer:
        "Yes, we specialize in Google My Business verification without bypassing video verification. We use legitimate methods to ensure your business is verified quickly and securely, enabling you to benefit from enhanced local visibility and customer trust.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-sans mx-auto p-6 sm:p-12 lg:p-24 bg-black text-white">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">
          Frequently Asked
          <span className=" text-orange-500 ml-2">Questions</span>
        </h2>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div className="accordion rounded-lg shadow-md" key={index}>
            <button
              type="button"
              className="toggle-button w-full text-sm sm:text-base outline-none text-left font-semibold py-4 px-3 sm:py-6 sm:px-4 flex items-center text-white rounded-t-lg hover:text-orange-500 transition-all duration-300"
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
            >
              <span className="mr-4">{faq.question}</span>
              {openIndex === index ? (
                <Icon
                  icon="mdi:minus"
                  className="w-5 h-5 ml-auto shrink-0 text-orange-500 transform rotate-180 transition-all duration-300"
                />
              ) : (
                <Icon
                  icon="mdi:plus"
                  className="w-5 h-5 ml-auto shrink-0 text-orange-500 transform rotate-0 transition-all duration-300"
                />
              )}
            </button>
            <div
              className={`content transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-[1000px] pb-4 sm:pb-6 overflow-visible"
                  : "max-h-0 invisible overflow-hidden"
              }`}
            >
              <p className="text-xs sm:text-sm text-gray-300 px-4 sm:px-6 pb-4 sm:pb-6">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
