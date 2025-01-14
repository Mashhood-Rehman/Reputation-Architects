import { Icon } from "@iconify/react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What digital marketing services do you offer for businesses?",
      answer:
        "We offer a comprehensive range of digital marketing services including SEO, PPC, social media marketing, Web Development, content creation, and conversion rate optimization to help your business grow and succeed online.",
    },
    {
      question:
        "How does SEO help improve my website's visibility on search engines?",
      answer:
        "SEO (Search Engine Optimization) enhances your website's visibility by optimizing on-page elements, creating quality backlinks, and improving your site structure to rank higher on search engine results pages, driving organic traffic.",
    },
    {
      question: "What is PPC advertising, and how can it benefit my business?",
      answer:
        "PPC (Pay-Per-Click) advertising allows you to display targeted ads on platforms like Google and social media. You pay only when someone clicks your ad. It's a great way to drive immediate traffic and leads to your business.",
    },
    {
      question:
        "How do you measure the success of a digital marketing campaign?",
      answer:
        "We measure success through key performance indicators (KPIs) such as website traffic, conversion rates, ROI, and engagement metrics. We provide regular reports to track the progress and optimize campaigns for better results.",
    },
    {
      question: "Can you help improve my local search rankings?",
      answer:
        "Yes, we specialize in Local SEO. We optimize your business for local search queries, improve your Google My Business profile, and ensure that your business appears in local search results and maps for relevant keywords.",
    },
    {
      question:
        "How long does it take to see results from digital marketing campaigns?",
      answer:
        "The timeline for results can vary depending on the strategy and goals. For SEO, it may take a few months to see significant results. However, PPC campaigns can provide immediate results. We tailor our approach to meet your business needs.",
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
