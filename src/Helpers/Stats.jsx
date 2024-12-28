import { Users, ShoppingCart, Star } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: <Users className="text-orange-500 w-10 h-10" />,
      value: "400+",
      label: "Unique Visitors",
    },
    {
      icon: <ShoppingCart className="text-orange-500 w-10 h-10" />,
      value: "450+",
      label: "Total Sales",
    },
    {
      icon: <Star className="text-orange-500 w-10 h-10" />,
      value: "4.8",
      label: "Customer Rating",
    },
    {
      icon: <Users className="text-orange-500 w-10 h-10" />,
      value: "1500+",
      label: "Happy Customers",
    },
  ];

  return (
    <div className="font-sans py-4  bg-black  ">
      <div className=" ">
        <h1
          className=" text-white  flex items-center justify-center text-4xl font-semibold  font-[sans-serif] 
        "
        >
          Our Stats
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2  gap-y-12 divide-x divide-gray-300">
        {stats.map((stat, index) => (
          <div
            className=" flex items-center justify-center  ease-in-out flex-col "
            key={index}
          >
            {stat.icon}
            <h3 className="text-3xl font-extrabold text-orange-500 mt-5">
              {stat.value}
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
