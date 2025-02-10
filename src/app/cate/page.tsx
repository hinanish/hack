import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGasPump, FaHeart } from 'react-icons/fa'
import { MdPeopleOutline } from 'react-icons/md'
import { PiGasPump } from 'react-icons/pi'
import { RiSteering2Line } from 'react-icons/ri'

export default function Pick() {
  return (
    <div className="flex bg-gray-100 py-10 ">
      {/* Sidebar */}
      <div className="w-[260px] h-[] p-6 bg-white shadow-lg rounded-lg flex-none">
        {/* Type Section */}
        <div className="w-[176px] h-[532px] mb-6">
          <h2 className="text-lg font-medium mb-4">Type</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <input type="checkbox" id="sport" className="accent-blue-500" />
              <label htmlFor="sport" className="text-gray-700">Sport (10)</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" id="suv" className="accent-blue-500" />
              <label htmlFor="suv" className="text-gray-700">SUV (12)</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" id="mpv" className="accent-blue-500" />
              <label htmlFor="mpv" className="text-gray-700">MPV (16)</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" id="sedan" className="accent-blue-500" />
              <label htmlFor="sedan" className="text-gray-700">Sedan (20)</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" id="coupe" className="accent-blue-500" />
              <label htmlFor="coupe" className="text-gray-700">Coupe (14)</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" id="hatchback" className="accent-blue-500" />
              <label htmlFor="hatchback" className="text-gray-700">Hatchback (14)</label>
            </li>
          </ul>
        </div>

        {/* Capacity Section */}
        <div className="w-[176px] h-[240px] mb-6">
          <h2 className="text-lg font-medium mb-4">Capacity</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">  
              <input type="checkbox" id="two-person" className="accent-blue-500" />
              <label htmlFor="two-person" className="text-gray-700">2 Person (10)</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" id="four-person" className="accent-blue-500" />
              <label htmlFor="four-person" className="text-gray-700">4 Person (14)</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" id="six-person" className="accent-blue-500" />
              <label htmlFor="six-person" className="text-gray-700">6 Person (12)</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" id="eight-person" className="accent-blue-500" />
              <label htmlFor="eight-person" className="text-gray-700">8 or More (16)</label>
            </li>
          </ul>
        </div>

        {/* Price Section */}
        <div className="w-[176px] h-[104px]">
          <h2 className="text-lg font-medium mb-4">Price</h2>
          <div className="flex flex-col">
            <input type="range" className="w-full accent-blue-500" min="0" max="100" />
            <span className="text-gray-700 mt-2">Max. $100.00</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 gap-6 px-5">
        {/* Pick-Up and Drop-Off Section */}
        <div className="flex justify-between gap-2">
          {/* Pick-Up Section */}
          <div className="flex flex-col items-center justify-between rounded-md gap-4 w-full h-[132px] max-w-full p-5 bg-white">
            <div className="flex items-center gap-4 w-full">
              <Image src={'/circle.png'} alt='circle' width={26} height={26} className='rounded' />
              <div className="text-lg font-medium">Pick-Up</div>
            </div>
            <div className="flex flex-row w-full gap-4">
              <div className="flex flex-col w-full">
                <label className="text-sm text-gray-500">Locations</label>
                <select className="mt-1 text-sm text-gray-700 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select your city</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label className="text-sm text-gray-500">Date</label>
                <select className="mt-1 text-sm text-gray-700 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select your date</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label className="text-sm text-gray-500">Time</label>
                <select className="mt-1 text-sm text-gray-700 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select your time</option>
                </select>
              </div>
            </div>
          </div>

          {/* Arrow Divider */}
          <div className="flex items-center justify-center w-[63px] h-[63px] bg-blue-500 rounded-md gap-0 p-3">      
            <span className="text-white text-xl">⇅</span>
          </div>


          {/* Drop-Off Section */}
          <div className="flex flex-col items-center justify-between rounded-md gap-2 w-full h-[132px] max-w-full p-5 bg-white">
            <div className="flex items-center gap-4 w-full">
              <Image src={'/circle.png'} alt='circle' width={26} height={26} className='rounded' />
              <div className="text-lg font-medium">Drop-Off</div>
            </div>
            <div className="flex flex-row w-full gap-4">
              <div className="flex flex-col w-full">
                <label className="text-sm text-gray-500">Locations</label>
                <select className="mt-1 text-sm text-gray-700 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select your city</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label className="text-sm text-gray-500">Date</label>
                <select className="mt-1 text-sm text-gray-700 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select your date</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label className="text-sm text-gray-500">Time</label>
                <select className="mt-1 text-sm text-gray-700 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select your time</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Cars Section */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Car Cards */}
          {/* Use your existing car cards here */}
          
                    <div className="bg-white rounded-[10px] shadow-md p-4 w-[304px] h-[388px] ">
                      <div className="flex justify-between items-center mb-8 mt-4">
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">Koenigsegg</h3>
                          <p className="text-sm text-gray-600">Sport</p>
                        </div><span className="text-red-500 text-xl">
                        <FaHeart  /></span>
                      </div>
                      <div className="flex justify-center mb-4">
                        <Image src="/whitecar.png" alt="Koenigsegg" width={232} height={72} />
                      </div>
                      <div className="flex justify-around text-gray-600 mb-4">
                        <div className="flex flex-col items-center text-sm">
                          <FaGasPump />
                          <span>90L</span>
                        </div>
                        <div className="flex flex-col items-center text-sm">
                          <RiSteering2Line/>
                          <span>Manual</span>
                        </div>
                        <div className="flex flex-col items-center text-sm">
                          <MdPeopleOutline />
                          <span>2 People</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-bold text-gray-800">$99.00/ <sub className="text-gray-400">day</sub></p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md"> <Link href='/bill' target="_blank"> Rent Now </Link></button>
                      </div>
                    </div>
                    <div className="bg-white rounded-[10px] shadow-md p-4 w-[304px] h-[388px] ">
                      <div className="flex justify-between items-center mb-8 mt-4">
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">Koenigsegg</h3>
                          <p className="text-sm text-gray-600">Sport</p>
                        </div><span className="text-red-500 text-xl">
                        <FaHeart  /></span>
                      </div>
                      <div className="flex justify-center mb-4">
                        <Image src="/whitecar.png" alt="Koenigsegg" width={232} height={72} />
                      </div>
                      <div className="flex justify-around text-gray-600 mb-4">
                        <div className="flex flex-col items-center text-sm">
                          <FaGasPump />
                          <span>90L</span>
                        </div>
                        <div className="flex flex-col items-center text-sm">
                          <RiSteering2Line/>
                          <span>Manual</span>
                        </div>
                        <div className="flex flex-col items-center text-sm">
                          <MdPeopleOutline />
                          <span>2 People</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-bold text-gray-800">$99.00/ <sub className="text-gray-400">day</sub></p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md"><Link href='/bill' target="_blank"> Rent Now </Link></button>
                      </div>
                    </div>
            
                    
                    <div className="bg-white rounded-[10px] shadow-md p-4 w-[304px] h-[388px] ">
                      <div className="flex justify-between items-center mb-4  mt-8">
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">Nissan GT-R</h3>
                          <p className="text-sm text-gray-600">Sport</p>
                        </div><span className="text-red-500 text-xl">
                        <FaHeart  /></span>
                      </div>
                      <div className="flex justify-center mb-4">
                        <Image src="/graycar.png" alt="Nissan" width={204} height={64} />
                      </div>
                      <div className="flex justify-around text-gray-600 mb-4">
                        <div className="flex flex-col items-center text-sm">
                          <FaGasPump />
                          <span>80L</span>
                        </div>
                        <div className="flex flex-col items-center text-sm">
                          <RiSteering2Line />
                          <span>Manual</span>
                        </div>
                        <div className="flex flex-col items-center text-sm">
                          <MdPeopleOutline />
                          <span>2 People</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-bold text-gray-800">$80.00/day</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md"><Link href='/bill' target="_blank"> Rent Now </Link></button>
                      </div>
                    </div>
            
                    
                    <div className="bg-white rounded-[10px]shadow-md p-4 w-[304px] h-[388px]">
                      <div className="flex justify-between items-center mb-8 mt-4 ">
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">Lamborghini</h3>
                          <p className="text-sm text-gray-600">Sport</p>
                        </div><span className="text-red-500 text-xl">
                        <FaHeart  /></span>
                      </div>
                      <div className="flex justify-center mb-4">
                        <Image src="/bluecar.png" alt="Lamborghini" width={220} height={68}/>
                      </div>
                      <div className="flex justify-around text-gray-600 mb-4">
                        <div className="flex flex-col items-center text-sm">
                          <FaGasPump />
                          <span>90L</span>
                        </div>
                        <div className="flex flex-col items-center text-sm">
                          < RiSteering2Line/>
                          <span>Automatic</span>
                        </div>
                        <div className="flex flex-col items-center text-sm">
                          <MdPeopleOutline />
                          <span>2 People</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-bold text-gray-800">$120.00/day</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md"><Link href='/bill' target="_blank"> Rent Now </Link></button>
                      </div>
                    </div><div className="bg-white rounded-[10px] shadow-md p-4 w-[304px] h-[388px] ">
                      <div className="flex justify-between items-center mb-4  mt-8">
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">Nissan GT-R</h3>
                          <p className="text-sm text-gray-600">Sport</p>
                        </div><span className="text-red-500 text-xl">
                        <FaHeart  /></span>
                      </div>
                      <div className="flex justify-center mb-4">
                        <Image src="/graycar.png" alt="Nissan" width={204} height={64} />
                      </div>
                      <div className="flex justify-around text-gray-600 mb-4">
                        <div className="flex flex-col items-center text-sm">
                          <FaGasPump />
                          <span>80L</span>
                        </div>
                        <div className="flex flex-col items-center text-sm">
                          <RiSteering2Line />
                          <span>Manual</span>
                        </div>
                        <div className="flex flex-col items-center text-sm">
                          <MdPeopleOutline />
                          <span>2 People</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-bold text-gray-800">$80.00/day</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md"><Link href='/bill' target="_blank"> Rent Now </Link></button>
                      </div>
                      
                    </div>

            
                    
                    <div className="bg-white rounded-[10px] shadow-md p-4 w-[304px] h-[388px]">
                      <div className="flex justify-between items-center mb-4 mt-8 ">
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">Ferrari</h3>
                          <p className="text-sm text-gray-600">Sport</p>
                        </div><span className="text-red-500 text-xl" >
                        <FaHeart /></span>
                      </div>
                      <div className="flex justify-center mb-4">
                      <Image src="/nisan.png" alt="Lamborghini" width={204} height={64}/>
                      </div>
                      <div className="flex justify-around text-gray-600 mb-4">
                        <div className="flex flex-col items-center text-sm">
                        <PiGasPump />
                          <span>85L</span>
                        </div>
                        <div className="flex flex-col items-center text-sm">
                          <RiSteering2Line />
                          <span>Automatic</span>
                        </div>
                        <div className="flex flex-col items-center text-sm">
                          <MdPeopleOutline />
                          <span>2 People</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-bold text-gray-800">$110.00/day</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md"><Link href='/bill' target="_blank"> Rent Now </Link></button>
                      </div>
                      
                    </div>
                    <div className="bg-white rounded-[10px] shadow-md p-4 w-[304px] h-[388px]">
                      <div className="flex justify-between items-center mb-4 mt-8 ">
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">Ferrari</h3>
                          <p className="text-sm text-gray-600">Sport</p>
                        </div><span className="text-red-500 text-xl" >
                        <FaHeart /></span>
                      </div>
                      <div className="flex justify-center mb-4">
                      <Image src="/nisan.png" alt="Lamborghini" width={204} height={64}/>
                      </div>
                      <div className="flex justify-around text-gray-600 mb-4">
                        <div className="flex flex-col items-center text-sm">
                        <PiGasPump />
                          <span>85L</span>
                        </div>
                        <div className="flex flex-col items-center text-sm">
                          <RiSteering2Line />
                          <span>Automatic</span>
                        </div>
                        <div className="flex flex-col items-center text-sm">
                          <MdPeopleOutline />
                          <span>2 People</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-bold text-gray-800">$110.00/day</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md"><Link href='/bill' target="_blank"> Rent Now </Link></button>
                      </div>
                      
                    </div> <div className="bg-white rounded-[10px] shadow-md p-4 w-[304px] h-[388px]">
                      <div className="flex justify-between items-center mb-4 mt-8 ">
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">Ferrari</h3>
                          <p className="text-sm text-gray-600">Sport</p>
                        </div><span className="text-red-500 text-xl" >
                        <FaHeart /></span>
                      </div>
                      <div className="flex justify-center mb-4">
                      <Image src="/nisan.png" alt="Lamborghini" width={204} height={64}/>
                      </div>
                      <div className="flex justify-around text-gray-600 mb-4">
                        <div className="flex flex-col items-center text-sm">
                        <PiGasPump />
                          <span>85L</span>
                        </div>
                        <div className="flex flex-col items-center text-sm">
                          <RiSteering2Line />
                          <span>Automatic</span>
                        </div>
                        <div className="flex flex-col items-center text-sm">
                          <MdPeopleOutline />
                          <span>2 People</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-bold text-gray-800">$110.00/day</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md"><Link href='/bill' target="_blank"> Rent Now </Link></button>
                      </div>
                      
                    </div> <div className="bg-white rounded-[10px] shadow-md p-4 w-[304px] h-[388px]">
                      <div className="flex justify-between items-center mb-4 mt-8 ">
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">Ferrari</h3>
                          <p className="text-sm text-gray-600">Sport</p>
                        </div><span className="text-red-500 text-xl" >
                        <FaHeart /></span>
                      </div>
                      <div className="flex justify-center mb-4">
                      <Image src="/nisan.png" alt="Lamborghini" width={204} height={64}/>
                      </div>
                      <div className="flex justify-around text-gray-600 mb-4">
                        <div className="flex flex-col items-center text-sm">
                        <PiGasPump />
                          <span>85L</span>
                        </div>
                        <div className="flex flex-col items-center text-sm">
                          <RiSteering2Line />
                          <span>Automatic</span>
                        </div>
                        <div className="flex flex-col items-center text-sm">
                          <MdPeopleOutline />
                          <span>2 People</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-bold text-gray-800">$110.00/day</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md"><Link href='/bill' target="_blank"> Rent Now </Link></button>
                      </div>
                      
                    </div>
                  
        </div>
      </div>
    </div>
  )
}






