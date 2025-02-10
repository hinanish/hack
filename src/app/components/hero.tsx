import Image from 'next/image';
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 py-10 px-5 space-y-5 md:space-y-0">
      
      <div className="relative w-[640px] h-[360px] bg-blue-500 rounded-lg overflow-hidden">
      
        <Image
          src="/bgcircle.jpg" 
          alt="Blue Background"
          width={640}
          height={360}
          className="absolute inset-0 object-cover z-0"
        />
      
        <div className="absolute top-5 left-5 z-10">
          <h2 className="text-3xl font-bold text-white">
            The Best Platform <br /> for Car Rental
          </h2>
          <p className="text-white mt-3">
            Ease of doing car rental safely and reliably. <br /> Of course at a low price.
          </p>
          <Button className="mt-4 bg-[#3563E9] text-[#F6F7F9] hover:bg-blue-800 rounded-sm hover:text-white">
            Rental Car
          </Button>
        </div>
        
        <div className="absolute bottom-0 right-0 z-10">
          <Image
            src="/whitecar.png" 
            alt="Car 1"
            width={406}
            height={116}
            className="object-contain"
          />
        </div>
      </div>

      
      <div className="relative w-[640px] h-[360px] bg-pink-500 rounded-lg overflow-hidden">
        
        <Image
          src="/bgwave.jpg" 
          alt="Background"
          width={640}
          height={360}
          className="absolute inset-0 object-cover z-0"
        />
      
        <div className="absolute top-5 left-5 z-10">
          <h2 className="text-3xl font-bold text-white">
            Easy way to rent a <br />car at a low price
          </h2>
          <p className="text-white mt-3">
            Providing cheap car rental services <br /> and safe and comfortable facilities.
          </p>
          <Button className="mt-4 bg-[#54A6FF] text-[#F6F7F9] hover:bg-blue-800 rounded-sm hover:text-white">
            Rental Car
          </Button>
        </div>
      
        <div className="absolute bottom-0 right-0 z-10">
          <Image
            src="/graycar.png" 
            alt="Car 2"
            width={340}
            height={108}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
