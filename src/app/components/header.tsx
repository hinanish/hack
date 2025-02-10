import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-100 p-4 border-b border-gray-200 hidden md:block ">
      <div className="flex justify-between items-center">
        
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="text-2xl font-bold">High Fidelity Dashboard - Home Rent</span>
        </div>

        
        <div className="text-sm text-gray-500">
          Last Updated: 8 Aug 2022
        </div>
      </div>
    </div>
  );
};

export default Header;