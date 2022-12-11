import React, { useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";

const MainContainer = () => {
  const [{ foodItem }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />

      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="relative text-2xl font-semibold capitalize text-headingColor before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our Fresh & Healthy Fruits
          </p>

          {/* icons */}
          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all ease-in-out duration-100 hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-200)}
            >
              {" "}
              <MdChevronLeft className="text-lg text-white" />{" "}
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all ease-in-out duration-100 hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(200)}
            >
              {" "}
              <MdChevronRight className="text-lg text-white" />{" "}
            </motion.div>
          </div>
        </div>

        {/* row container */}
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItem?.filter((n) => n.category === "fruits")}
        />
      </section>
    </div>
  );
};

export default MainContainer;
