import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          <div>
            <Image
              src="/morent.png"
              alt="Logo"
              width={148}
              height={44}
              className="object-contain"
            />
            <p className="text-[#13131399] pt-3">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#1A202C] text-[20px] leading-[30px] tracking-[-0.02em] text-left">
              About
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-[#13131399] hover:text-indigo-600">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#13131399] hover:text-indigo-600">
                  Featured
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#13131399] hover:text-indigo-600">
                  Partnership
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#13131399] hover:text-indigo-600">
                  Business Relation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#1A202C] text-[20px] leading-[30px] tracking-[-0.02em] text-left">
              Community
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-[#13131399] hover:text-indigo-600">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#13131399] hover:text-indigo-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#13131399] hover:text-indigo-600">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#13131399] hover:text-indigo-600">
                  Invite friend
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#1A202C] text-[20px] leading-[30px] tracking-[-0.02em] text-left">
              Socials
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-[#13131399] hover:text-indigo-600">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#13131399] hover:text-indigo-600">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#13131399] hover:text-indigo-600">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#13131399] hover:text-indigo-600">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2022 Morent. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-900 hover:text-indigo-600">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-900 hover:text-indigo-600">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-900 hover:text-indigo-600">
              Cookies Settings
            </Link>
          </div>
        </div> 
      </div>
    </footer>
  );
};

export default Footer;
