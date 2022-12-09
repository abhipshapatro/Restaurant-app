import React from "react";
import Delivery from "../img/delivery.png";

const HomeContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="py-2 flex-1 flex flex-col items-start  justify-center gap-6">
        <div className="flex items-center justify-center gap-2 bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          {/* image */}
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              className="w-full h-full object-contain"
              src={Delivery}
              alt="bike delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in{" "}
          <span className="text-[3rem] lg:text-[5rem] text-orange-600">
            Your City
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          consequuntur asperiores vero omnis nemo quas modi maiores voluptates!
          Corrupti voluptatem aspernatur odio quis a vitae accusantium ea
          dolorem iure provident!
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now!
        </button>
      </div>

      <div className="py-2 bg-blue-300 flex-1"></div>
    </div>
  );
};

export default HomeContainer;
