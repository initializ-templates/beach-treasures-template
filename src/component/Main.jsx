/* eslint-disable no-unused-vars */
import React from "react";
import background from "../image/backgroung.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";
import discover from "../image/discover.webp";
import Sroll from "./Sroll";

const Main = () => {
  return (
    <div className="">
      <div className="relative">
        <img
          src={background}
          alt="beach"
          className="w-full h-screen object-cover "
        />

        <div className=" bg-stone-500/15 dark:bg-black/30  absolute  w-full h-screen top-0 left-0 ">
          <div className=" px-4 max-w-[900px] bg-whit w-full h-full m-auto flex flex-col justify-center  items-start gap-4 ">
            <Sroll direction="left">
              <h3 className=" dark:text-white  text-based sm:text-lg font-bold">
                Discover your Favorite Beach
              </h3>
              <h1 className="  dark:text-white text-3xl sm:text-6xl font-bold">
                Explore The
              </h1>
              <div className=" dark:text-white text-3xl sm:text-6xl  font-bold">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Best Beautiful Beaches",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Most fascinating of them all",
                    1000,
                    // "Less expensive",
                    // 1000,hillas",
                    // 1000,
                    // "We produce food for Chinc
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "1em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </div>
            </Sroll>
            <a href="#discover">
            <Sroll direction="right" >
              <div className=" bg-orange-700  py-2 px-6 mt-14 flex items-center justify-center gap-1 hover:bg-white text-white group hover:text-orange-700 shadow-md shadow-black">

                <h1 className="  ">Explore</h1>
                <FaArrowRight className=" group-hover:translate-x-2 duration-150  " />
              </div>
            </Sroll>
</a>
            {/* <div className=" w-full  mt-1 flex justify-end">
              <div className="w-[32%] bg-orange-700 group flex p-4 hover:translate-y-[1rem] duration-500 transition-all rounded-lg shadow-lg shadow-black" > 
                <h1 className="group-hover:translate-y-[2.5rem] text-white uppercase font-semibold text-sm ">Discover the best</h1>
                <img src={discover} alt="Discover" className="w-[10rem] rounded-lg object-cover" />

              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
