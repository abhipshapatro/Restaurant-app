import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import EmptyCart from "../img/emptyCart.svg";

const CartContainer = () => {
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]"
    >
      {/* back option */}
      <div
        className="w-full flex items-center justify-between p-4 cursor-pointer
        "
      >
        {/* back icon */}
        <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
        </motion.div>
        {/* cart heading */}
        <p className="text-lg text-textColor font-semibold">Cart</p>

        {/* cart button */}
        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2   rounded-md bg-gray-100 hover:shadow-md cursor-pointer text-base text-textColor"
        >
          Clear <RiRefreshFill />{" "}
        </motion.p>
      </div>

      {/*  bottom section */}
      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
          {/* cart items section */}
          <div className="w-full h-340 md:h-42 px-6 py-10 gap-3 flex flex-col overflow-y-scroll scrollbar-none">
            {/* cart item */}
            {cartItems &&
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2"
                >
                  <img
                    src={item.imageURL}
                    alt=""
                    className="w-20 h-20 max-w-[60px] object-contain rounded-full"
                  />

                  {/* cart item name */}
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-gray-50">{item?.title}</p>
                    <p className="text-sm block text-gray-50 font-semibold">
                      ${item?.price}
                    </p>
                  </div>

                  {/* button section */}
                  <div className="group flex items-center gap-2 ml-auto cursor-pointer">
                    {/* minus icon */}
                    <motion.div whileTap={{ scale: 0.75 }}>
                      <BiMinus className="text-gray-50" />
                    </motion.div>

                    {/* quantity */}
                    <p className="w-5 h5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
                      {item?.qty}
                    </p>

                    {/* plus icon */}
                    <motion.div whileTap={{ scale: 0.75 }}>
                      <BiPlus className="text-gray-50" />
                    </motion.div>
                  </div>
                </div>
              ))}
          </div>

          {/* cart total section */}
          <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
            {/* sub total amount section */}
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Sub Total</p>
              <p className="text-gray-400 text-lg">$ 4.5</p>
            </div>
            {/* delivery amount section */}
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Delivery</p>
              <p className="text-gray-400 text-lg">$ 2.5</p>
            </div>

            {/* divider */}
            <div className="w-full border-b  border-gray-600 my-2"></div>

            {/* total amount */}
            <div className="w-full flex items-center justify-between">
              <p className="text-xl text-gray-200 font-semibold">Total</p>
              <p className="text-xl text-gray-200 font-semibold">$11.5</p>
            </div>

            {/* button */}
            {user ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-200 text-lg my-2 hover:shadow-lg "
              >
                Check Out
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.8 }}
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-200 text-lg my-2 hover:shadow-lg "
              >
                Login to Check Out
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={EmptyCart} alt="empty cart svg" className="w-360 p-4" />
          <p className="text-xl text-textColor font-semibold">
            Add some items to your cart
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default CartContainer;
