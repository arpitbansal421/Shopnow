import React from "react";
import { cart, logoDark } from "./assests/index"; // Make sure the path is correct
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Profiler } from "react";
const Header = () => {
  const productdata = useSelector((store) => store.shop.productData);
  const userInfo = useSelector((store) => store.shop.userInfo);

  console.log(userInfo);
  console.log("Hi I am from productsdata", productdata);

  const logTimes = (id, phase, actualTime, baseTime, startTime, commitTime) => {
    console.table("Hi this react profiler", { id, phase, actualTime, baseTime, startTime, commitTime });
  };

  return (
    <Profiler id='item-info' onRender={logTimes}>
      <div className="w-full h-20 bg-white font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50">
        <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between sm:px-2 sm:gap-2 px-4">
          <div>
            <Link to='/'>
              <h1 className="w-15 font-bold text-3xl text-black font-cursive md:text-2xl sm:text-xl xs:text-lg">
                Shop Now
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-8 px-8 sm:px-4 sm:gap-4 xs:px-2 xs:gap-2">
            <ul className="flex items-center gap-8 sm:gap-4 xs:gap-2">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Pages
              </li>
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Shop
              </li>
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Element
              </li>
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Blog
              </li>
            </ul>
            <div className="relative">
              <img src={cart} alt="cart img" className="w-6" />
              <span className="absolute w-6 top-2 text-sm flex items-center justify-center font-semibold font-titleFont">0</span>
            </div>
            <div className="flex items-center gap-2">
              <Link to='/cart'>
                <img className="w-8 h-8 rounded-full" src={
                  userInfo ? userInfo.image : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                } alt="uselogo" />
              </Link>
              {userInfo && (
                <p className="text-base font-titleFont font-semibold underline underline-offset-2 hidden sm:block">
                  {userInfo.name}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Profiler>
  );
};

export default Header;

 // Component name should start with uppercase
