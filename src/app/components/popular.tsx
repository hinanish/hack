import Image from "next/image";
import { FaGasPump, FaHeart } from "react-icons/fa";
import { MdPeopleOutline } from "react-icons/md";
import { PiGasPump } from "react-icons/pi";
import { RiSteering2Line } from "react-icons/ri";


function PopularCars() {
    return (
      <div className="bg-gray-100 py-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Popular Cars</h2>
  
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">

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
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Rent Now</button>
            </div>
          </div>
  
          {/* Car Card 2 */}
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
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Rent Now</button>
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
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Rent Now</button>
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
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Rent Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default PopularCars;