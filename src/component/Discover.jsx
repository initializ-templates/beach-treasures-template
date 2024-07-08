import React from "react";
import Discoverlist from "./Discoverlist";
import Sroll from "./Sroll";
const Discover = () => {
  return (
    <div id="discover" className="scroll-smooth duration-200">
      <div className="md:py-36 py-10 md:mt-10 max-w-[1200px] w-full mx-auto">
        <Sroll direction="right">
          <h1 className="text-center mt-5 font-bold text-2xl uppercase">
            Discover The Most Attractive beaches
          </h1>
        </Sroll>
        <Discoverlist />
      </div>
    </div>
  );
};

export default Discover;
