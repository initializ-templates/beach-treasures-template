/* eslint-disable no-unused-vars */
import React from 'react'
import Turquois from "../image/Turq.webp";
import { CiLocationOn } from "react-icons/ci";

const Turquoise = () => {
   return (
     <div className="py-24 h-screen">
       <div className="mt-10 max-w-[1400px]  mx-auto px-4  ">
         <h1 className="text-4xl text-center text-orange-700 dark:text-orange-800 font-bold">
           Turquoise Bay
         </h1>
         <div className="mt-10 lg:flex   gap-10">
           <div className="lg:w-[50%] flex items-center justify-center lg:justify-start">
             <img
               src={Turquois}
               alt="truck"
               className="shadow-lg shadow-black lg:w-full sm:w-[28rem] object-cover rounded-2xl hover:scale-105 duration-500"
             />
           </div>
           <div className="lg:w-[40%] flex justify-evenly flex-col mt-10 space-y-2 lg:space-y-0  lg:mt-0  ">
             <p className="flex items-center text-xs gap-2 border-gray-300 p-1 text-center shadow-md shadow-black w-[6rem] bg-orange-600 dark:bg-orange-800 text-white ">
               <CiLocationOn className="text-white" />
               <span> Australia </span>
             </p>
             <p className="text-gray-700 text-sm sm-text-base dark:text-white">
               Turquoise Bay, Australia | Surrounded by turquoise waters, this
               beach lives up to its name. The beach is undeveloped and remote,
               located within Cape Range National Park and the bay’s waters are
               part of Ningaloo Reef. Turqoise Bay is known for its snorkeling
               right from the shore.
             </p>
             <a
               href="#"
               className=" bg-orange-600 dark:bg-orange-800 w-[6rem] text-center text-white shadow-md shadow-black hover:bg-gray-400 rounded-full hover:text-orange-700 uppercase"
             >
               Visit
             </a>
           </div>
         </div>
       </div>
     </div>
   );
}

export default Turquoise