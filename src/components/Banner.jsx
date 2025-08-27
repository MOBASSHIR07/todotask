import React from 'react';
import logo from '../assets/vistasystech_logo.jpg'; 
import { FaSearch, FaChevronDown } from 'react-icons/fa'; 
import { RxCross2 } from "react-icons/rx";

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto border shadow-xl rounded-md flex justify-between py-6 px-2 my-10 items-center'>
            
            
            <div className='w-1/6'>
                <img src={logo} alt="Company Logo" className="w-12 h-12" />
            </div>

            
            <div className='flex items-center space-x-4 w-5/6'>
            
                <div className="relative flex items-center w-full">
                    <input
                        type="text"
                        placeholder="Search tasks..."
                        className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                    <FaSearch className="absolute left-3 text-gray-400" />
                    <button className="absolute right-3 text-gray-400 focus:outline-none">
                       <RxCross2 />
                    </button>
                </div>

                
                <div className='relative'>
                    <select className="border rounded-md px-4 py-2 pr-10 appearance-none focus:outline-none focus:ring focus:border-blue-300">
                        <option>All</option>
                        <option>Completed</option>
                        <option>Active</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <FaChevronDown className="h-5 w-5" />
                    </div>
                </div>
            </div>
          
         <div>

         </div>


        </div>
    );
};

export default Banner;