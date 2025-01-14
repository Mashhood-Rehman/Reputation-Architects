import { Icon } from "@iconify/react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const stats = [
    {
      icon: (
        <Icon icon="mdi:account-group" className="text-orange-500 w-10 h-10" />
      ),
      value: 400,
      label: "Unique Visitors",
    },
    {
      icon: <Icon icon="mdi:cart" className="text-orange-500 w-10 h-10" />,
      value: 450,
      label: "Total Sales",
    },
    {
      icon: <Icon icon="mdi:star" className="text-orange-500 w-10 h-10" />,
      value: 4.8,
      label: "Customer Rating",
    },
    {
      icon: (
        <Icon icon="mdi:account-group" className="text-orange-500 w-10 h-10" />
      ),
      value: 1500,
      label: "Happy Customers",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="font-sans py-4 bg-black">
      <div>
        <h1 className="text-white flex items-center justify-center text-4xl font-semibold font-[sans-serif]">
          Our Stats
        </h1>
      </div>
      <div
        ref={ref}
        className="grid lg:grid-cols-4 sm:grid-cols-2 gap-y-12 divide-x divide-gray-300"
      >
        {stats.map((stat, index) => (
          <div
            className="flex items-center justify-center ease-in-out flex-col"
            key={index}
          >
            {stat.icon}
            <h3 className="text-3xl font-extrabold text-orange-500 mt-5">
              {inView ? (
                <CountUp
                  end={stat.value}
                  duration={3}
                  decimals={stat.value % 1 === 0 ? 0 : 1}
                />
              ) : (
                "0"
              )}
              {stat.value > 100 && "+"} {/* Adds "+" for values over 100 */}
            </h3>
            <p className="text-base text-white font-semibold mt-3">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
