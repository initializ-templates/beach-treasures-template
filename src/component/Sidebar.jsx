import React from 'react'
import { ImCancelCircle } from "react-icons/im";
import { FcAbout, FcHome } from "react-icons/fc";
import { MdPlace, MdOutlineWifiFind } from "react-icons/md";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { useGlobalContext } from './Context';
import { Link } from "react-router-dom";
import Switch from "react-switch";


const Sidebar = () => {
    const { nav, closeNav, toggleTheme, theme  } = useGlobalContext();
  return (
    <>
      <nav
        className={`${
          nav
            ? "fixed top-0  w-full h-full  z-10 transition-transform transform scale-100 bg-black/90"
            : "fixed top-0  w-full h-full  z-0 transition-transform transform scale-0 bg-black/90"
        }`}
      >
        <div className="p-4  mt-24 ">
          <ImCancelCircle size={30} onClick={closeNav} className="text-white" />
        </div>
        <div className=" flex justify-center items-center  bg-gray-300 dark:bg-black  show h-[600px] w-[80%] mx-auto rounded-lg  flex-col gap-8">
          <ul className="flex flex-col w-full font-bold text-[1.2rem]  gap-10">
            <li className="hover:underline underline-offset-8 w-[50%] m-auto bg-green-300 dark:bg-green-800 shadow-md shadow-black justify-center transition-all duration-300 flex  items-center gap-1 py-2 rounded-full">
              <FcHome />
              <Link to="/"> Home</Link>
            </li>
            <li className=" hover:underline underline-offset-8 w-[50%] m-auto  bg-green-300 dark:bg-green-800  shadow-md shadow-black justify-center transition-all duration-300 flex  items-center gap-1 py-2 rounded-full">
              <FcAbout size={20} />
              About
            </li>
            <li className=" hover:underline underline-offset-8 w-[50%] m-auto  bg-green-300 dark:bg-green-800  shadow-md shadow-black justify-center transition-all duration-300 flex  items-center gap-1 py-2 rounded-full">
              <MdPlace size={20} />
              Places
            </li>
            <li className=" hover:underline underline-offset-8 w-[50%] m-auto  bg-green-300  dark:bg-green-800 shadow-md shadow-black justify-center transition-all duration-300 flex  items-center gap-1 py-2 rounded-full">
              <MdOutlineWifiFind size={20} />
              Discover
            </li>
          </ul>
          <div>
            <Switch
              onChange={toggleTheme}
              checked={theme === "dark"}
              size={20}
              className="text-white cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Sidebar