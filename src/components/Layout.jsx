import React, { useState } from "react";
import { Outlet } from "react-router-dom";
<<<<<<< HEAD
import logotipo from "../images/Logo-4.svg";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
=======
import logotipo from "../images/Logo-4.svg"
>>>>>>> c8ea9a12b63e3ec109ee08b735df2c24213dcc37

function Layout() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Pricing", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <>
<<<<<<< HEAD
      <div className="shadow-md w-full fixed top-0 left-0 z-50">
        <div className="md:flex items-center justify-between bg-custom-softblueB py-4 md:px-10 px-7">
          {/* logo section */}
          <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
            <img src={logotipo} width={150} height={150} alt="Your SVG" />
=======
      <nav class="bg-custom-softblueB shadow shadow-gray-300 w-100 px-8 md:px-auto">
        <div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
          {/* <!-- Logo --> */}
          <div class="text-slate-50 md:order-1">
            {/* <!-- Heroicon - Chip Outline --> */}
            <img src={logotipo} width={150} height={150}alt="Your SVG"/>
>>>>>>> c8ea9a12b63e3ec109ee08b735df2c24213dcc37
          </div>
          {/* Menu icon */}
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
          >
            {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
          </div>
          {/* linke items */}
          <ul
            className={`font-Montserrat md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-custom-softblueB md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-12" : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li className="md:ml-8 md:my-0 my-7 font-semibold">
                <a
                  href={link.link}
                  className="text-white hover:text-blue-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <button className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
              Get Started
            </button>
          </ul>
          {/* button */}
        </div>
      </div>
      <div className="">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;

// <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
//               {/* <!-- Heroicons - Login Solid --> */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               <span>Login</span>
//             </button>
