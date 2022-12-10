import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdFastfood } from "react-icons/md";
import { categories } from "../utils/data";
import Loader from "./Loader";

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [fields, setFields] = useState(true);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [imageAsset, setimageAsset] = useState(null);
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      {/* container div */}
      <div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
        {/* input field */}
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            }`}
          >
            {msg}
          </motion.p>
        )}

        {/* title */}
        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
          <MdFastfood className="text-xl text-gray-700" />
          <input
            type="text"
            required
            value={title}
            placeholder="Give me a title.."
            className="w-full h-full bg-transparent text-lg font-semibold outline-none border-none placeholder:text-gray-400 text-textColor"
          />
        </div>

        {/* select category */}
        <div className="w-full">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
          >
            <option value="other" className="bg-white">
              Select Category
            </option>
            {/* mapping through categories */}
            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  className="text-base border-0 outline-none capitalize bg-white text-headingColor"
                  value={item.urlParamName}
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>


        {/* upload picture */}
        <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-md">
          {/* loader */}
          {isLoading ? <Loader /> : <></>}

        </div>
      </div>
    </div>
  );
};

export default CreateContainer;
