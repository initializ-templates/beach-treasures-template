import place1 from "../image/place3.jpg";
import place from "../image/place2.jpg";
import Sroll from "./Sroll";

const About = () => {
  return (
    <section id="about">
      <div className="max-w-[1200px]  w-full mx-auto md:flex items-center justify-center py-[4rem] gap-4 ">
        <div className="md:w-[40%] w-[80%] mx-auto  p-6  text-center flex flex-col gap-8 ">
          <Sroll direction="up">
            <h1 className=" text-xl font-bold">
              More Information <br />
              About The Best Beaches
            </h1>
            <p className="">
              You can find the most beautiful and pleasant places at the best
              prices with special discounts, you choose the place we will guide
              you all the way to wait, get your place now.
            </p>
            <a href="#discover">
            <button className="py-2 px-2 text-white  bg-orange-700 hover:bg-orange-900 font-bold mt-2">
              Find a spot
            </button>
            </a>
          </Sroll>
        </div>
        <Sroll direction="down">
          <div className="flex gap-4 items-center justify-center px-2">
            <div className="lg:h-[23rem] md:h-[20rem] sm:h-[14rem] h-[12rem]  overflow-hidden">
              <img
                src={place1}
                alt=""
                className=" object-cover hover:scale-95 duration-500"
              />
            </div>
            <div className="lg:h-[27rem] md:h-[24rem] sm:h-[18rem] h-[16rem]  overflow-hidden">
              <img
                src={place}
                alt=""
                className=" object-cover   hover:scale-95 duration-500"
              />
            </div>
          </div>
        </Sroll>
      </div>
    </section>
  );
};

export default About;
