import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "Are there any special discounts or promotions available during the event?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas vestibulum a turpis in lacinia. Proin aliquam turpis at erat venenatis malesuada.",
    },
    {
      question:
        "What are the dates and locations for the product launch events?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas congue facilisis sapien, a semper orci facilisis in.",
    },
    {
      question: "Can I bring a guest with me to the product launch event?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas congue facilisis sapien, a semper orci facilisis in.",
    },
    {
      question: "How can I register for the event?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas congue facilisis sapien, a semper orci facilisis in.",
    },
    {
      question: "Is there parking available at the venue?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas congue facilisis sapien, a semper orci facilisis in.",
    },
    {
      question: "How can I contact the event organizers?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas congue facilisis sapien, a semper orci facilisis in.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-sans mx-auto p-6 sm:p-12 lg:p-24 bg-black text-white">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">
          Frequently Asked Questions
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
                <Minus className="w-5 h-5 ml-auto shrink-0 text-orange-500 transform rotate-180 transition-all duration-300" />
              ) : (
                <Plus className="w-5 h-5 ml-auto shrink-0 text-orange-500 transform rotate-0 transition-all duration-300" />
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
