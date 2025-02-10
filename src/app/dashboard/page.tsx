"use client"
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import React, { useState } from 'react';

const plus_jakarta_Sans = Plus_Jakarta_Sans({
  weight: "600",
  subsets: ["latin"],
  display: "swap"
});

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    <div className={`flex min-h-screen bg-gray-100 text-gray-900 ${plus_jakarta_Sans.className}`}>
      {/* Sidebar */}
      <aside className="w-[286px] h-screen bg-white p-6 shadow-lg">
        <h2 className="text-[12px] mb-6 text-[#94A7CB] font-medium tracking-wider">MAIN MENU</h2>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setActiveMenu("Dashboard")}
              className={`flex items-center px-4 py-2 rounded-md text-sm font-medium w-full text-left transition-all duration-200 ${
                activeMenu === "Dashboard" ? "text-white bg-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveMenu("Car Rent")}
              className={`flex items-center px-4 py-2 rounded-md text-sm font-medium w-full text-left transition-all duration-200 ${
                activeMenu === "Car Rent" ? "text-white bg-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Car Rent
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveMenu("Insight")}
              className={`flex items-center px-4 py-2 rounded-md text-sm font-medium w-full text-left transition-all duration-200 ${
                activeMenu === "Insight" ? "text-white bg-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Insight
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveMenu("Reimburse")}
              className={`flex items-center px-4 py-2 rounded-md text-sm font-medium w-full text-left transition-all duration-200 ${
                activeMenu === "Reimburse" ? "text-white bg-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Reimburse
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveMenu("Inbox")}
              className={`flex items-center px-4 py-2 rounded-md text-sm font-medium w-full text-left transition-all duration-200 ${
                activeMenu === "Inbox" ? "text-white bg-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Inbox
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveMenu("Calendar")}
              className={`flex items-center px-4 py-2 rounded-md text-sm font-medium w-full text-left transition-all duration-200 ${
                activeMenu === "Calendar" ? "text-white bg-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Calendar
            </button>
          </li>
        </ul>

        <div className="mt-12">
          <h2 className="text-[12px] mb-4 text-[#94A7CB] font-medium tracking-wider">PREFERENCES</h2>
          <ul className="space-y-4">
            <li>
              <button
                className="flex items-center px-4 py-2 rounded-md text-sm font-medium w-full text-left text-gray-700 hover:text-blue-600"
              >
                Settings
              </button>
            </li>
            <li>
              <button
                className="flex items-center px-4 py-2 rounded-md text-sm font-medium w-full text-left text-gray-700 hover:text-blue-600"
              >
                Help & Center
              </button>
            </li>
            <li>
              <button
                className="flex items-center px-4 py-2 rounded-md text-sm font-medium w-full text-left text-gray-700 hover:text-blue-600"
              >
                Dark Mode
              </button>
            </li>
            <li>
              <button
                className="flex items-center px-4 py-2 rounded-md text-sm font-medium w-full text-left text-gray-700 hover:text-red-600"
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-blue-600">{activeMenu}</h1>
        </header>

        <section className="bg-white rounded-lg p-6 shadow mb-6">
          <h2 className="text-xl font-bold mb-4 text-blue-600">Details Rental</h2>
          <div className="flex items-center gap-4">
            <Image src="/nisan.png" height={800} width={400} alt="Car" className=" rounded" />
            <div>
              <p className="text-lg font-semibold">Nissan GT-R</p>
              <p className="text-gray-600">Sport Car</p>
              <p className="text-gray-600">Pick-Up: Kota Semarang, 20 July 2022, 07:00</p>
              <p className="text-gray-600">Drop-Off: Kota Semarang, 21 July 2022, 01:00</p>
            </div>
          </div>
          <div className="text-right text-2xl font-bold mt-4 text-blue-600">$80.00</div>
        </section>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-xl font-bold mb-4 text-blue-600">Top 5 Car Rentals</h2>
            <p className="text-gray-600">72,030 Rental Cars</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-xl font-bold mb-4 text-blue-600">Recent Transactions</h2>
            <ul className="space-y-2">
              <li className="text-gray-600">Nissan GT-R</li>
              <li className="text-gray-600">Koenigsegg</li>
              <li className="text-gray-600">Rolls-Royce</li>
              <li className="text-gray-600">CR-V</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
