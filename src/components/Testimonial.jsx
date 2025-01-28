import { useState } from "react";
import { Icon } from "@iconify/react";

const Testimonials = () => {
  const testimonials = [
    {
      img: "https://readymadeui.com/team-2.webp",
      name: "John D.",
      role: "Owner of The Appliance Squad:",
      text: "I hired these folks to build a website for The Appliance Squad, and the results are amazing! The site looks fantastic, is easy to navigate, and perfectly matches my vision. I’m extremely pleased with their work and wouldn’t hesitate to work with them again!",
    },
    {
      img: "https://readymadeui.com/team-5.webp",
      name: "Chris Anderson ",
      role: "CEO of Mountain Movers:",
      text: "We’ve seen great results with Reputation Architects LLC for our SEO. Our moving company is now ranking at the top locally, and we’re getting a lot more leads. If you want to grow your business online, I highly recommend them!",
      stars: 4,
    },
    {
      img: "https://readymadeui.com/team-4.webp",
      name: "Simon Konecki",
      role: "Founder of Labar",
      text: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
    },
    {
      img: "https://readymadeui.com/team-2.webp",
      name: "Jane Doe",
      role: "CEO of Acme",
      text: "Fantastic! I’ll definitely recommend this place to my friends. It exceeded all my expectations.",
    },
    {
      img: "https://readymadeui.com/team-5.webp",
      name: "Jeremiah Blake",
      role: "Director at The Agency Texas ",
      text: "My partner and I were worried about our low review count, so we hired this company for their review management services. They’ve made a huge difference! They helped us get more reviews from our customers and other sources, and now we feel confident in our ability to compete. We’re so glad we made the decision to work with them!",
      stars: 4,
    },
    {
      img: "https://readymadeui.com/team-4.webp",
      name: "Michael Johnson",
      role: "CTO of Zeta",
      text: "Absolutely loved the atmosphere and service. The staff went above and beyond to ensure our satisfaction.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1;
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0;
      return newIndex;
    });
  };

  return (
    <div className="px-6 py-12 bg-gradient-to-b from-black via-gray-900 to-black text-[#f97316] font-sans">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
          <h2 className="text-4xl font-extrabold text-center lg:text-left">
            What Our Happy Clients Say
          </h2>
          <div className="flex space-x-4 mt-6 lg:mt-0">
            <button
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center bg-[#f97316] rounded-full hover:bg-opacity-80 transition"
            >
              <Icon icon="mdi:chevron-left" className="text-black text-xl" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center bg-[#f97316] rounded-full hover:bg-opacity-80 transition"
            >
              <Icon icon="mdi:chevron-right" className="text-black text-xl" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`min-w-full p-8 transition-all ${
                  index === currentIndex ? "scale-105" : "opacity-60"
                }`}
              >
                <div className="relative bg-[#1f1f1f] border border-[#f97316] rounded-3xl shadow-xl p-6">
                  <img
                    src={testimonial.img}
                    alt={`${testimonial.name} avatar`}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full absolute -top-4 left-6 border-4 border-[#f97316] object-cover"
                  />
                  <div className="mt-10 text-center">
                    <h4 className="text-lg font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[#a39786]">{testimonial.role}</p>
                    <p className="mt-4 text-sm text-[#e0d7c1]">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
