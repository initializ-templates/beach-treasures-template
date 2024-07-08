
import { CiLocationOn } from "react-icons/ci";
import etu from "../image/arse.webp";

const  Anse = () => {
  return (
    <div className="py-24 h-screen">
      <div className="mt-10 max-w-[1400px]  mx-auto px-4  ">
        <h1 className="text-4xl text-center text-orange-700 dark:text-orange-800 font-bold">
          Anse Georgette
        </h1>
        <div className="mt-10 lg:flex   gap-10">
          <div className="lg:w-[45%] flex items-center justify-center lg:justify-start">
            <img
              src={etu}
              alt="truck"
              className="shadow-lg shadow-black lg:w-full sm:w-[28rem] object-cover rounded-2xl hover:scale-105 duration-500"
            />
          </div>
          <div className="lg:w-[40%] flex justify-evenly flex-col mt-10 space-y-2 lg:space-y-0  lg:mt-0  ">
            <p className="flex items-center text-xs gap-2 border-gray-300 p-1 text-center shadow-md shadow-black w-[6rem] bg-orange-600 dark:bg-orange-900 text-white ">
              <CiLocationOn className="text-white" />
              <span> Seychelles </span>
            </p>
            <p className="text-gray-700 text-sm sm-text-base dark:text-white">
              Anse Georgette, Seychelles | Located on Prasin Island, Seychelles,
              this beach is described as a “hidden gem” by the 2024 World’s 50
              Best Beaches list. It is accessible via a short hike through the
              lush terrain of a nearby golf course or by boat. Rainy season
              usually only lasts December and January.
            </p>
            <a
              href="#"
              className=" bg-orange-600 dark:bg-orange-900  w-[6rem] text-center text-white shadow-md shadow-black hover:bg-gray-400 rounded-full hover:text-orange-700 uppercase"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default  Anse