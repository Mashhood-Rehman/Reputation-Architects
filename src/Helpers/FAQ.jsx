import { Icon } from "@iconify/react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "What is SEO, and how can it help my business?",
      answer:
        "SEO (Search Engine Optimization) improves your website's visibility on search engines, helping attract organic traffic and potential customers to grow your business.",
    },
    {
      question: "What web development services do you provide?",
      answer:
        "We specialize in creating responsive, modern websites tailored to your business needs, ensuring a user-friendly experience that drives conversions.",
    },
    {
      question: "How does reviews management enhance my brand's credibility?",
      answer:
        "By managing and showcasing positive reviews, we help build trust and credibility with potential clients, strengthening your online reputation.",
    },
    {
      question: "How can social media marketing grow my business?",
      answer:
        "Our social media campaigns engage your target audience, increase brand awareness, and drive traffic to your website, resulting in better customer retention.",
    },
    {
      question: "Why is Google Business verification important?",
      answer:
        "Google Business verification improves your local search visibility, making it easier for nearby customers to find and trust your business.",
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
