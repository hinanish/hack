import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col space-y-8 p-8 bg-[#F6F7F9]">
      <div className="flex space-x-8">
        {/* Left Side - Billing, Rental Info, Payment, Confirmation */}
        <div className="w-[852px]">
          {/* Billing Info */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Billing Info</h2>
            <p className="text-sm text-[#1A202C] mb-4">Please enter your billing info</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#1A202C] mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-[#1A202C] mb-2">Phone Number</label>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-[#1A202C] mb-2">Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-[#1A202C] mb-2">Town / City</label>
                <input
                  type="text"
                  placeholder="Town or city"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Rental Info */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 h-[664px]">
            <h2 className="text-xl font-semibold mb-4">Rental Info</h2>
            <p className="text-sm text-gray-500 mb-4">Please select your rental date</p>

            {/* Pick-Up Info */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-2 flex"> <Image src={'/circle.png'} alt='circle' width={26} height={26} className='rounded' /> Pick-Up</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 mb-2">Locations</label>
                  <select className="w-full p-2 border rounded-md text-gray-600">
                    <option>Select your city</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">Date</label>
                  <select className="w-full p-2 border rounded-md text-gray-600">
                    <option>Select your date</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">Time</label>
                  <select className="w-full p-2 border rounded-md text-gray-600">
                    <option>Select your time</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Drop-Off Info */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-2 flex"><Image src={'/circle.png'} alt='circle' width={26} height={26} className='rounded' /> Drop-Off</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 mb-2">Locations</label>
                  <select className="w-full p-2 border rounded-md text-gray-600">
                    <option>Select your city</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">Date</label>
                  <select className="w-full p-2 border rounded-md text-gray-600">
                    <option>Select your date</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">Time</label>
                  <select className="w-full p-2 border rounded-md text-gray-600">
                    <option>Select your time</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="w-full bg-white rounded-lg shadow-md p-6 h-[596px] mb-6">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <p className="text-sm text-gray-500 mb-4">Please enter your payment method</p>

            {/* Credit Card Option */}
            <div className="border rounded-lg p-4 mb-4 bg-[#F6F7F9] ">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <input type="radio" id="credit-card" name="payment" defaultChecked />
                  <label htmlFor="credit-card" className="font-medium">
                    Credit Card
                  </label>
                </div>
                <div className="flex space-x-2">
                  <Image
                    src="/visa.png"
                    alt="Visa"
                    height={20}
                    width={92}
                    className="h-5"
                  />
                  
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Card number"
                  className="border rounded p-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="DD / MM / YY"
                  className="border rounded p-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="Card holder"
                  className="border rounded p-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="border rounded p-2 text-sm"
                />
              </div>
            </div>

            {/* PayPal Option */}
            <div className="border rounded-lg p-4 flex items-center justify-between mb-4 bg-[#F6F7F9] ">
              <div className="flex items-center space-x-2">
                <input type="radio" id="paypal" name="payment" />
                <label htmlFor="paypal" className="font-medium">
                  PayPal
                </label>
              </div>
              <Image
                src="/paypal.png"
                alt="PayPal"
                width={100}
                height={24}
                className="h-5"
              />
            </div>

            {/* Bitcoin Option */}
            <div className="border rounded-lg p-4 flex items-center justify-between bg-[#F6F7F9] ">
              <div className="flex items-center space-x-2">
                <input type="radio" id="bitcoin" name="payment" />
                <label htmlFor="bitcoin" className="font-medium">
                  Bitcoin
                </label>
              </div>
              <Image
                src="/bitcoin.png"
                alt="Bitcoin"
                height={20}
                width={94}
                className="h-5"
              />
            </div>
          </div>

          {/* Confirmation Section */}
          <div className="w-full bg-white rounded-lg shadow-md p-6 h-[484px]">
            <h2 className="text-lg font-semibold mb-4">Confirmation</h2>
            <p className="text-sm text-gray-500 mb-4">
              We are getting to the end. Just a few clicks and your rental is ready!
            </p>
            <div className="space-y-4 ">
              <label className="flex items-center space-x-2 bg-[#F6F7F9] h-[56px]">
                <input type="checkbox" />
                <span className="text-sm ">
                  I agree with sending marketing and newsletter emails. No spam,
                  promised!
                </span>
              </label>
              <label className="flex items-center space-x-2 h-[56px] bg-[#F6F7F9] ">
                <input type="checkbox" />
                <span className="text-sm">
                  I agree with our terms and conditions and privacy policy.
                </span>
              </label>
            </div>
            <div className="mt-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
                Rent Now
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Rental Summary */}
        <div className="w-[492px] h-[560px] bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Rental Summary</h2>
          <p className="text-sm text-gray-500 mb-6">
            Prices may change depending on the length of the rental and the price of your car.
          </p>
          
          <div className="flex items-center mb-4">
            <div
              className="relative w-[132px] h-[108px] mr-4"
              style={{
                backgroundImage: "url('/bgwave.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
              }}
            >
              <Image
                src="/nisan.png"
                alt="Car"
                width={116}
                height={36}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 rounded-md"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Nissan GT - R</h3>
              <div className="text-yellow-500 text-sm">★★★★★</div>
              <p className="text-sm text-gray-500">440+ Reviewer</p>
            </div>
          </div>

          <div className="space-y-2 text-gray-700 mb-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$80.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between items-center">
              <input
                type="text"
                placeholder="Apply promo code"
                className="w-2/3 p-2 border rounded-md text-gray-600"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Apply now
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center text-gray-800 font-bold text-xl">
            <span>Total Rental Price</span>
            <span>$80.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
