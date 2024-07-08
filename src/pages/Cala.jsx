import { CiLocationOn } from "react-icons/ci";
import cala from "../image/cala.webp";

const Cala = () => {
   
    return (
      <div className="py-24 h-screen">
        <div className="mt-10 max-w-[1400px]  mx-auto px-4  ">
          <h1 className="text-4xl text-center text-orange-700 dark:text-orange-800 font-bold">
            Cala Mariolu
          </h1>
          <div className="mt-10 lg:flex   gap-10">
            <div className="lg:w-[45%] flex items-center justify-center lg:justify-start">
              <img
                src={cala}
                alt="truck"
                className="shadow-lg shadow-black lg:w-full sm:w-[28rem] object-cover rounded-2xl hover:scale-105 duration-500"
              />
            </div>
            <div className="lg:w-[40%] flex justify-evenly flex-col mt-10 space-y-2 lg:space-y-0  lg:mt-0  ">
              <p className="flex items-center text-xs gap-2 border-gray-300 p-1 text-center shadow-md shadow-black w-[6rem] bg-orange-600 dark:bg-orange-900 text-white ">
                <CiLocationOn className="text-white" />
                <span> Italy </span>
              </p>
              <p className="text-gray-700 text-sm sm-text-base">
                Cala Mariolu, Italy | Located along the eastern coast of
                Sardinia, Italy, this beach can only be reached by boat or
                hiking trails. According to the World’s 50 Best Beaches website,
                Cala Mariolu stands out for its “striking beauty everywhere you
                turn and the sense of privacy and adventure it offers.” Cala
                Mariolu is much busier in July and August compared to other
                times of the year. June and September are a great compromise to
                avoid the crowds and still enjoy nice weather. It is recommended
                to visit the beach on days with little to no wind.
              </p>
              <a
                href="#"
                className=" bg-orange-600 dark:bg-orange-900 w-[6rem] text-center text-white shadow-md shadow-black hover:bg-gray-400 rounded-full hover:text-orange-700 uppercase"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Cala