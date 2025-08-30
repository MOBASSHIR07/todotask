import React, { useContext } from 'react';
import logo from '../assets/vistasystech_logo.jpg';
import { FaSearch, FaChevronDown } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";
import { TodoContext } from '../Context/TodoProvider';

const Banner = () => {
    const { filterCategory, handleSearchTask, searchItem, setSearchItem } = useContext(TodoContext);
    return (
        <div className='w-11/12 mx-auto border shadow-xl rounded-md flex justify-between py-6 px-2 my-10 items-center'>


            <div className='w-1/6'>
                <img src={logo} alt="Company Logo" className="w-12 h-12" />
            </div>


            <div className='flex items-center space-x-4 w-5/6'>

                <div className="relative flex items-center w-full">
                    <input
                        value={searchItem}
                        onChange={(e) => { handleSearchTask(e.target.value) }}
                        type="text"
                        placeholder="Search tasks..."
                        className="w-full pl-8 pr-12 sm:pr-12 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                    <FaSearch className="absolute left-3 text-gray-400" />
                    <button
                        onClick={() => { setSearchItem(""); handleSearchTask(""); }}
                        className="absolute right-2 sm:right-3 text-gray-400 focus:outline-none p-1 flex items-center justify-center"
                    >
                        <RxCross2 size={16} />
                    </button>
                </div>


                <div className='relative'>
                    <select onChange={(e) => { filterCategory(e.target.value) }} defaultValue='all' className="border rounded-md px-4 py-2 pr-10 appearance-none focus:outline-none focus:ring focus:border-blue-300">
                        <option value='all'>All</option>
                        <option value='completed'>Completed</option>
                        <option value='active'>Active</option>
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