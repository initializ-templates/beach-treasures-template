/* eslint-disable no-unused-vars */

import { FaFacebookSquare, FaTwitter, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
      <div className="bg-orange-600 dark:bg-orange-900 py-8 px-4 ">
        <div className="max-w-[1200px] w-full mx-auto grid lg:grid-cols-4 sm:grid-cols-2 space-y-4 sm:space-y-0 px-6 items-center rounded-lg py-4 shadow-lg shadow-orange-900 justify-between bg-white/95">
          <div className="flex flex-col gap-6 ">
            <h1 className="text-md font-bold  text-orange-500  cursor-pointer">
              Beach View
            </h1>
            <p className="text-gray-500 hover:text-gray-700">
              We offer you the most <br></br> attractive beaches
            </p>
            <div className="flex text-orange-500 gap-3">
              <a href="https://www.facebook.com/profile.php?id=61556962362662" target="_blank">
              <FaFacebookSquare
                size={20}
                className="hover:text-gray-500 cursor-pointer"
              />
              </a>
              <a href="https://x.com/initializ/" target="_blank">
              <FaTwitter
                size={20}
                className="hover:text-gray-500 cursor-pointer"
              />
              </a>
              <a href='https://www.instagram.com/initializ.ai/' target='_blank'>
              <FaInstagram
                size={20}
                className="hover:text-gray-500 cursor-pointer"
              />
              </a>
              <a href='https://www.youtube.com/@initializAI' target='_blank'>
              <FaYoutube
                size={20}
                className="hover:text-gray-500 cursor-pointer"
              />
              </a>
            </div>
          </div>
          <ul className="flex flex-col cursor-pointer gap-4">
            <li className="text-md font-bold  text-orange-500 ">About</li>
            <li className="text-gray-500 hover:text-gray-700">About us</li>
            <li className="text-gray-500 hover:text-gray-700">Features</li>
            <li className="text-gray-500 hover:text-gray-700">News & Blog</li>
          </ul>
          <ul className="flex flex-col cursor-pointer  gap-4">
            <li className="text-md font-bold  text-orange-500 ">Company</li>
            <li className="text-gray-500 hover:text-gray-700">Team</li>
            <li className="text-gray-500 hover:text-gray-700">Plan pricing</li>
            <li className="text-gray-500 hover:text-gray-700">
              Become a member
            </li>
          </ul>
          <ul className="flex flex-col cursor-pointer  gap-4">
            <li className="text-md font-bold  text-orange-500 ">Support</li>
            <li className="text-gray-500 hover:text-gray-700">FAQs</li>
            <li className="text-gray-500 hover:text-gray-700">
              Support Center
            </li>
            <li className="text-gray-500 hover:text-gray-700">Contact Us</li>
          </ul>
        </div>
        <div className='max-w-[1200px] m-auto flex mt-10 items-center justify-between text-xs sm:text-sm dark:text-white font-semibold px-4'>
          <h2>© 2024 Initializ Inc. All rigths reserved.</h2>
          <h2 className='cursor-pointer'>Terms & Agreements Privacy Policy</h2>
        </div>
      </div>
    );
}

export default Footer