import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBell, FaHeart, FaSearch } from "react-icons/fa";
import { IoMdSettings } from 'react-icons/io';

const Nav = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-blue-500">MORENT</h1>
        </div>
        
        <div>
          <nav>
            <ul className="flex space-x-6 text-gray-700 font-medium">
              <li className="hover:text-blue-500 transition"><Link href="/dashboard" target="_blank">Dashboard</Link></li>
              <li className="hover:text-blue-500 transition"><Link href="/content" target="_blank">Details</Link></li>
              <li className="hover:text-blue-500 transition"><Link href="/bill" target="_blank">Payment</Link></li>
              <li className="hover:text-blue-500 transition"><Link href="/cate" target="_blank">Content</Link></li>
            </ul>
          </nav>
        </div>
        
        <div className="flex items-center w-1/2 bg-gray-100 px-4 py-2 rounded-full gap-2">
          <FaSearch />
          <input
            type="text"
            placeholder="Search something here"
            className="bg-transparent focus:outline-none text-sm text-gray-700 w-full"
          /> 
        </div>
        
        <div className="flex items-center space-x-4 text-gray-600 ">
          <div className='lg:flex hidden items-center space-x-4 text-gray-600 '>
            <FaHeart />
            <FaBell />
            <IoMdSettings />
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-300 cursor-pointer">
            <Image
              src="/proboy.png"
              alt="Profile"
              width={44}
              height={44}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
