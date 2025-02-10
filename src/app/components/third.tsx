'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FaHeart, FaGasPump, FaCar, FaUser } from 'react-icons/fa';
import Link from 'next/link';

function Cars() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    
    <div className="bg-gray-100 py-5 sm:flex-col">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Popular Cars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto px-2">
        {[
          { name: 'Koenigsegg', type: 'Sport', image: '/whitecar.png', fuel: '90L', transmission: 'Manual', capacity: '2 People', price: '$99.00/day' },
          { name: 'Nissan GT-R', type: 'Sport', image: '/graycar.png', fuel: '80L', transmission: 'Manual', capacity: '2 People', price: '$80.00/day' },
          { name: 'Ferrari', type: 'Luxury', image: '/blueCar.png', fuel: '85L', transmission: 'Automatic', capacity: '2 People', price: '$120.00/day' },
          { name: 'Lamborghini', type: 'Sport', image: '/nisan.png', fuel: '95L', transmission: 'Manual', capacity: '2 People', price: '$150.00/day' },
          { name: 'Porsche', type: 'Luxury', image: '/allnew.png', fuel: '70L', transmission: 'Automatic', capacity: '4 People', price: '$110.00/day' },
          { name: 'Tesla Model S', type: 'Electric', image: '/cr.png', fuel: 'N/A', transmission: 'Automatic', capacity: '5 People', price: '$130.00/day' },
          { name: 'BMW i8', type: 'Hybrid', image: '/cr1.png', fuel: '50L', transmission: 'Automatic', capacity: '2 People', price: '$140.00/day' },
          { name: 'Audi R8', type: 'Sport', image: '/crb.png', fuel: '85L', transmission: 'Manual', capacity: '2 People', price: '$100.00/day' },
          { name: 'Chevrolet Camaro', type: 'Sport', image: '/aqua.png', fuel: '75L', transmission: 'Manual', capacity: '4 People', price: '$90.00/day' },
          { name: 'Ford Mustang', type: 'Sport', image: '/nisan.png', fuel: '80L', transmission: 'Manual', capacity: '4 People', price: '$95.00/day' },
          { name: 'Mercedes AMG', type: 'Luxury', image: '/aqua.png', fuel: '90L', transmission: 'Automatic', capacity: '2 People', price: '$115.00/day' },
          { name: 'Jaguar F-Type', type: 'Sport', image: '/crb.png', fuel: '85L', transmission: 'Manual', capacity: '2 People', price: '$125.00/day' },
        ].map((car, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-3 w-[240px]">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h3 className="text-base font-bold text-gray-800">{car.name}</h3>
                <p className="text-xs text-gray-600">{car.type}</p>
              </div>
              <span className="text-red-500 text-lg">
                <FaHeart />
              </span>
            </div>
            <Image src={car.image} alt={car.name} width={160} height={80} className="mx-auto mb-3" />
            <div className="flex justify-around text-xs text-gray-600 mb-3">
              <div className="flex flex-col items-center">
                <FaGasPump />
                <span>{car.fuel}</span>
              </div>
              <div className="flex flex-col items-center">
                <FaCar />
                <span>{car.transmission}</span>
              </div>
              <div className="flex flex-col items-center">
                <FaUser />
                <span>{car.capacity}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-base font-bold text-gray-800">{car.price}</p>
              <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded-md">Rent Now</button>
            </div>
          </div>
        ))}
      </div><section className="button w-full text-center">
      <Link href='/cate' target="_blank"> <button 
            onClick={toggleShowMore} 
            className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5"
          >  
            {showMore ? "Show Less Cars" : "Show More Cars"}
          </button></Link>
        </section>

    </div>
  );
}

export default Cars;