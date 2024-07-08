import { CiLocationOn } from "react-icons/ci";
import etu from "../image/etu.webp";

const  Entalula = () => {
   
    return (
      <div className="py-24 h-screen">
        <div className="mt-10 max-w-[1400px]  mx-auto px-4  ">
          <h1 className="text-4xl text-center text-orange-700 dark:text-orange-800 font-bold">
            Entalula Beach
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
                <span> Philippines </span>
              </p>
              <p className="text-gray-700 text-sm sm-text-base dark:text-white">
                Entalula Beach | The archipelago outside El Nido in Palawan,
                Philippines is composed of wild limestone cliffs, lagoons,
                hundreds of islands and a rich marine fauna. One of the beaches
                on those islands, Entalula Beach in El Nido, is “less frequented
                than others in the area, offering visitors a chance to escape.”
                Entalula Beach is only accessible by boat, adding an element of
                exclusivity.
              </p>
              <a
                href="#"
                className=" bg-orange-600  w-[6rem] text-center text-white shadow-md shadow-black hover:bg-gray-400 rounded-full hover:text-orange-700 dark:bg-orange-900 uppercase"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default  Entalula