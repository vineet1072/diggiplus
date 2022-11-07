import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 shadow-lg shadow-orange-300/50">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img
            src="./images/logo.png"
            alt="logo"
            className=" w-8 md:w-10 lg:w-12"
          />
          <h1 className=" text-orange-400 text-2xl font-bold mr-4 sm:text-3xl md:text-3xl ">
            <NavLink to="/">
              DIGI<span className="text-orange-600">PPLUS</span>
            </NavLink>
          </h1>
          <ul className="hidden md:flex ">
            <li className="ml-2 p-4 hover:text-orange-500 active:text-orange-600">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="p-4  hover:text-orange-500 active:text-orange-600">
              <NavLink to="/myjobs">Jobs</NavLink>
            </li>
            <li className="p-4  hover:text-orange-500 active:text-orange-600">
              Payment
            </li>
            <li className="p-4  hover:text-orange-500 active:text-orange-600">
              Offerletter
            </li>
            <li className="p-4  hover:text-orange-500 active:text-orange-600">
              Certificate
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          {/* <button className='border-none bg-transparent text-black mr-4  hover:text-orange-500 active:text-orange-600'>
          SignIn
        </button> */}
          <CgProfile className="text-3xl text-white bg-blue-900 rounded-2xl" />
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? (
            <AiOutlineMenu className="w-5" />
          ) : (
            <AiOutlineCloseCircle className="w-5" />
          )}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <NavLink onClick={handleClose} to="/">
            Home
          </NavLink>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <NavLink onClick={handleClose} to="/myjobs">
            Jobs
          </NavLink>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">Payment</li>
        <li className="border-b-2 border-zinc-300 w-full onClick={handleClose} ">
          Offerletter
        </li>
        <li className="border-b-2 border-zinc-300 w-full onClick={handleClose}">
          Certificate
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
