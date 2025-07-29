import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";


const Topbar = () => {
  return (
    <div className="bg-black text-white animate-pulse">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <FaLocationDot className="w-5 h-5" />
          </a>

          <a href="#" className="hover:text-gray-300">
            <FaPinterest className="w-5 h-5" />
          </a>

          <a href="#" className="hover:text-gray-300">
            <FaLinkedinIn className="w-4 h-4" />
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
          <span>We ship worldwide - Fast and reliable shipping</span>
        </div>
        <div className="text-sm hidden md:block">
          <a href="tel:+2348106706460" className="text-yellow-300">
            +234 -810-670-6460
          </a>
        </div>
      </div>
    </div>
  );
}

export default Topbar