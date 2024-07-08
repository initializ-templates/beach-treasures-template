
import { CiLocationOn } from "react-icons/ci";
import green from "../image/green.webp";

const Green = () => {
   return (
     <div className="py-24 h-screen">
       <div className="mt-10 max-w-[1400px]  mx-auto px-4  ">
         <h1 className="text-4xl text-center text-orange-700 dark:text-orange-800 font-bold">
           Green Lagoon
         </h1>
         <div className="mt-10 lg:flex   gap-10">
           <div className="lg:w-[45%] flex items-center justify-center lg:justify-start">
             <img
               src={green}
               alt="truck"
               className="shadow-lg shadow-black lg:w-full sm:w-[28rem] object-cover rounded-2xl hover:scale-105 duration-500"
             />
           </div>
           <div className="lg:w-[40%] flex justify-evenly flex-col mt-10 space-y-2 lg:space-y-0  lg:mt-0  ">
             <p className="flex items-center text-xs gap-2 border-gray-300 p-1 text-center shadow-md shadow-black w-[6rem] bg-orange-600 dark:bg-orange-900 text-white ">
               <CiLocationOn className="text-white" />
               <span> French Polynesia </span>
             </p>
             <p className="text-gray-700 text-sm sm-text-base dark:text-white">
               Green Lagoon, French Polynesia | Located in Fakarava, French
               Polynesia, this beach is situated in one of the largest atolls in
               the Tuamotu Archipelago. The lagoon consists of a shallow sandy
               bottom and rich coral life. It is designated as a UNESCO
               Biosphere Reserve, ensuring the protection of its diverse
               ecosystems and endemic species. It is described as an ideal spot
               for ecotourism and conservation studies. Green Lagoon is
               accessible by a small boat.
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

export default Green