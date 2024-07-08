import React from "react";
import exper from "../image/experience1.jpg";
import expr from "../image/experience2.jpg";
import Sroll from "./Sroll";

const Eperience = () => {
  return (
    <div className="md:py-36 py-10" id="places">
      <div className="md:max-w-[500px] m-auto  flex flex-col gap-8 md:mt-10 ">
        <Sroll direction="up">
          <h1 className="text-center text-3xl font-bold">
            With Our Experience <br /> We Will Serve You
          </h1>
        </Sroll>
        <Sroll direction="right">
          <div className="flex gap-4 text-center w-full text-sm uppercase font-bold items-center justify-center">
            <div>
              <h1>20</h1>
              <p>
                {" "}
                Year <br /> Experience
              </p>
            </div>
            <div>
              <h1>75</h1>
              <p>
                {" "}
                complete <br /> tour
              </p>
            </div>
            <div>
              <h1>650+</h1>
              <p>
                {" "}
                tourist <br /> destination
              </p>
            </div>
          </div>
        </Sroll>
        <Sroll direction="down">
          <div className="flex relative items-center justify-center px-2">
            <img src={exper} alt="" className="w-[20rem] md:w-full" />
            <img
              src={expr}
              alt=""
              className="absolute right-[10rem] sm:left-[22rem] top-[6rem] md:w-[12rem] w-[6rem]"
            />
          </div>
        </Sroll>
      </div>
    </div>
  );
};

export default Eperience;
