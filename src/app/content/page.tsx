import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="max-w-full mx-auto p-4 font-sans">
      {/* Navbar */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-lg font-semibold">Your App</div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-[260px] p-4 bg-white shadow-lg rounded-lg flex-shrink-0">
          {/* Type Section */}
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-3">Type</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" />
                <label className="text-sm text-gray-700">Sport (10)</label>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" />
                <label className="text-sm text-gray-700">SUV (12)</label>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" />
                <label className="text-sm text-gray-700">MPV (16)</label>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" />
                <label className="text-sm text-gray-700">Sedan (20)</label>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" />
                <label className="text-sm text-gray-700">Coupe (14)</label>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" />
                <label className="text-sm text-gray-700">Hatchback (14)</label>
              </li>
            </ul>
          </div>

          {/* Capacity Section */}
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-3">Capacity</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" />
                <label className="text-sm text-gray-700">2 Person (10)</label>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" />
                <label className="text-sm text-gray-700">4 Person (14)</label>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" />
                <label className="text-sm text-gray-700">6 Person (12)</label>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" />
                <label className="text-sm text-gray-700">8 or More (16)</label>
              </li>
            </ul>
          </div>

          {/* Price Section */}
          <div>
            <h2 className="text-lg font-medium mb-3">Price</h2>
            <div className="flex flex-col">
              <input type="range" className="w-full accent-blue-500" min="0" max="100" />
              <span className="text-sm text-gray-700 mt-2">Max. $100.00</span>
            </div>
          </div>
        </div>

        {/* Main Section */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Car Images */}
            <div className="bg-[#F6F7F9] rounded-lg shadow-lg p-4 flex flex-col">
  {/* Main Car Image */}
  <Image
    src="/view.png"
    alt="Car Image"
    width={492}
    height={360}
    className="rounded-lg w-full h-auto max-h-[280px] object-cover"
  />
  
  {/* Thumbnails */}
  <div className="flex gap-3 mt-4 flex-wrap">
    <Image
      src="/view 1.png"
      alt="Thumbnail 1"
      width={100}
      height={80}
      className="rounded-md w-[28%] md:w-[20%] object-cover border border-gray-300"
    />
    <Image
      src="/view 2.png"
      alt="Thumbnail 2"
      width={100}
      height={80}
      className="rounded-md w-[28%] md:w-[20%] object-cover border border-gray-300"
    />
    <Image
      src="/view 3.png"
      alt="Thumbnail 3"
      width={100}
      height={80}
      className="rounded-md w-[28%] md:w-[20%] object-cover border border-gray-300"
    />
  </div>
</div>

            {/* Right: Car Details */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold">Nissan GT – R</h2>
                <div className="text-red-500 text-xl">❤️</div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="text-yellow-400">⭐⭐⭐⭐☆</div>
                <p className="text-sm text-gray-500">440+ Reviewer</p>
              </div>
              <p className="text-gray-500 mt-4">
                NISMO has become the embodiment of Nissan's outstanding performance,
                inspired by the most unforgiving proving ground, the "race track."
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mt-6">
                <p>
                  <strong>Type Car:</strong> Sport
                </p>
                <p>
                  <strong>Capacity:</strong> 2 Person
                </p>
                <p>
                  <strong>Steering:</strong> Manual
                </p>
                <p>
                  <strong>Gasoline:</strong> 70L
                </p>
              </div>

              {/* Pricing */}
              <div className="flex justify-between items-center mt-6">
                <div>
                  <p className="text-blue-600 text-2xl font-bold">$80.00</p>
                  <p className="text-sm text-gray-400 line-through">$100.00</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Rent Now
                </button>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold mb-4">Reviews</h3>
            <div className="space-y-6">
              {/* Review 1 */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <Image
                      src="/profile1.png"
                      alt="Reviewer 1"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-bold text-gray-800">Alex Stanton</p>
                      <span className="text-sm text-gray-500">CEO at Bukalapak</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">21 July 2022</p>
                </div>
                <p className="text-gray-600 mt-2">
                  We are very happy with the service from the MORENT App. Morent has
                  a low price and also a large variety of cars with good and comfortable facilities.
                </p>
              </div>

              {/* Review 2 */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <Image
                      src="/profile2.png"
                      alt="Reviewer 2"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-bold text-gray-800">Skylar Dias</p>
                      <span className="text-sm text-gray-500">CEO at Amazon</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">20 July 2022</p>
                </div>
                <p className="text-gray-600 mt-2">
                  We are greatly helped by the MORENT App. Morent provides good car
                  options and excellent customer service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

