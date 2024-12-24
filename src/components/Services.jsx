import { Icon } from "@iconify/react";
const Services = () => {
  return (
    <div className=" bg-black h-[100vh] text-white ">
      <div className=" p-24">
        <div className=" space-y-1">
          <span className=" border text-xs bg-gradient-to-r from-[#f97316] ang to-transparent  border-white px-3 py-1 rounded-xl">
            Our Services
          </span>
          <h1>What We Offer?</h1>
          <div className=" flex justify-between ">
            <p className=" w-96 text-sm text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              cumque repellat nisi repudiandae ullam qui architecto debitis quas
              sed, doloremque voluptate libero ad nihil animi?
            </p>
            <div className=" flex border border-white   text-xs rounded-3xl py-1 px-2  items-center justify-center space-x-1">
              <button className=" ">Our Services </button>
              <Icon icon="mdi-light:arrow-right" width="24" height="24" />
            </div>
            <div></div>
          </div>

          {/* 2nd div */}

          <div></div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Services;
