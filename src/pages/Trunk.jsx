import Truck from '../image/trunk.webp'
import { CiLocationOn } from "react-icons/ci";

const Trunk = () => {
    
    return (
      <div className="py-24    text-black dark:text-white min-h-screen">
        <div className="mt-10 max-w-[1400px]  mx-auto px-4  ">
          <h1 className="text-4xl text-center text-orange-700 dark:text-orange-800 font-bold">
            Trunk Bay
          </h1>
          <div className="mt-10 lg:flex   gap-10">
            <div className="lg:w-[50%] flex items-center justify-center lg:justify-start">
              <img
                src={Truck}
                alt="truck"
                className="shadow-lg shadow-black lg:w-full sm:w-[28rem] object-cover rounded-2xl hover:scale-105 duration-500"
              />
            </div>
            <div className="lg:w-[40%] flex justify-evenly flex-col mt-10 space-y-2 lg:space-y-0  lg:mt-0  ">
              <p className="flex items-center text-xs gap-2 border-gray-300 p-1 text-center shadow-md shadow-black w-[6rem] bg-orange-600 dark:bg-orange-900 text-white  ">
                <CiLocationOn className="text-white" />
                <span> US Virgin </span>
              </p>
              <p className="text-gray-700 text-sm sm-text-base dark:text-white">
                Trunk Bay, US Virgin Islands | Part of the Virgin Islands
                National Park, Trunk Bay contains one of the Caribbean’s most
                beautiful beaches, popular among tourists and locals. Trunk Bay
                is described as easy to enter with calm waters and a sandy
                bottom. It also features a vibrant reef for snorkelers to swim
                among colorful fish and explore the unique snorkeling trail. The
                busiest time of year for the National Park it’s located in is
                November to April.
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

export default Trunk