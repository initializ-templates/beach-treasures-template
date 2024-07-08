/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import logo from "../image/logo.png";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useGlobalContext } from "./Context";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import Switch from "react-switch";


const Header = () => {

  const { openNav, toggleTheme, theme } = useGlobalContext();
  const [sticky, setsticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setsticky(true);
      } else {
        setsticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  const handleScroll = () => {
    scrollToTop();
  }
  return (
    <header className="w-full z-20 fixed  ">
      <nav
        className={`py-2 sm:px-4 px-1 m-auto flex items-center justify-between w-full h-[6rem]  ${
          sticky
            ? "sticky top-5 marker:text-white left-0 right-0 bg-orange-500 dark:bg-orange-900 z-50 "
            : ""
        }`}
      >
        <Link
          onClick={handleScroll}
          className="flex items-center relative"
          to="/"
        >
          <img src={logo} alt="logo" className="w-[6rem] sm:w-[8rem] " />
        </Link>
        <div className="lg:flex items-center gap-8 justify-between hidden  ">
          <ul className="flex gap-24 font-bold text-[1.2rem] ">
            <li className="hover:underline underline-offset-8 transition-all duration-300">
              <Link onClick={handleScroll} to="/">
                {" "}
                Home
              </Link>
            </li>
            <li className="hover:underline underline-offset-8 transition-all duration-300">
              <a href="#about">About</a>
            </li>
            <li className="hover:underline underline-offset-8 transition-all duration-300">
              <a href="#discover">Discover</a>
            </li>
            <li className="hover:underline underline-offset-8 transition-all duration-300">
              <a href="#places"> Places</a>
            </li>
          </ul>
          <div className="flex w-full h-full justify-center items-center">
            <Switch
              onChange={toggleTheme}
              checked={theme === "dark"}
              size={20}
              className="text-white cursor-pointer"
            />
          </div>
        </div>
        <GiHamburgerMenu
          size={30}
          onClick={openNav}
          className="text-white lg:hidden block cursor-pointer"
        />
      </nav>
      <Sidebar />
    </header>
  );
};

export default Header;
