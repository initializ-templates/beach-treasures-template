import { useState } from 'react'
import { beach } from './data'
import { Link } from 'react-router-dom'
 

const Discoverlist = () => {
  // w-full h-full absolute bg-black/60 transform translate-y-full rounded-md transition-transform duration-300 ease-in-out group-hover:translate-y-0

  return (
    
      <div className="grid  xl:grid-cols-5 lg:grid-cols-4 mt-16 gap-6 sm:grid-cols-3 px-10 md:px-4  ">
        
        {beach.map((items) => {
          const { id, name, rank, image, links } = items;
          return (
            <div
              key={id}
              className="relative flex items-center justify-center overflow-hidden group"
            >
              <img
                src={image}
                alt=""
                className="lg:w-[15rem] sm:w-[12rem] w-full object-cover repair rounded-md"
              />
              <div className="flex lg:w-[15rem] sm:w-[12rem] flex-col justify-between w-full h-full absolute px-6 py-3 bg-black/60  translate-y-full   rounded-md  duration-300 ease-in-out group-hover:translate-y-0">
                <div className="flex items-center justify-between font-bold">
                  <h1 className="text-white text-xs p-1 border-2 rounded-full">
                    {rank}
                  </h1>
                  <h2 className="text-white text-sm ">{name}</h2>
                </div>
                <div className="text-white m-5 text-sm  font-bold flex items-center justify-center">
                  {links.map((items, index) => (
                    <Link
                      key={index}
                      className="border-2 py-2 px-4 rounded-lg"
                      to={items.link}
                    >
                      {items.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
 
  );
}

export default Discoverlist