import React, { useState } from "react";
import data from "../../data.json";


// import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="max-w-full">
      <header>
        <nav className="flex justify-between px-8 py-6 sm:p-6 bg-white items-center w-full">
          <a href="/">
            <div className="flex items-center gap- pr-4">
              <img
                height={32}
                width={32}
                src={data.sections.header.logo}
                alt={data.sections.header.alt}
              />
              <p className="text-black">
                {data.sections.header.text_logo}
              </p>
            </div>
          </a>
          <ul className="items-center justify-around hidden sm:flex md:gap-2 lg:gap-8 xl:gap-12 mr-80">
            
            {data.sections.header.navbar.map((item, index) => (
              <a
                href="#"
                key={index}
                className="min-w-max-content whitespace-nowrap ml-6"
              >
                <li className="font-bold text-gray_default hover:text-primary active:text-primary">
                  {item}
                </li>
              </a>
            ))}
          </ul>
          <div>
          <input type="text" className="text-white bg-black rounded-md" placeholder="Search DOML" />
         </div>
          <div className="items-center text-lg hidden sm:flex gap-6 min-w-max-content px-4">
            <a
              href="#"
              className="font-bold text-green_default text-[14px] md:text-[16px] lg:text-[18px]"
            >
              {data.sections.header.userLogin}
            </a>
            <button className="bg-white text-black py-2 px-4 rounded">
              <p className="font-bold text-[14px] md:text-[px] lg:text-[18px]">Sign in
                {data.sections.header.userSignUp}
              </p>
            </button>
            <button className="bg-white text-black py-2 px-4 rounded border border-black">
              <p className="font-bold text-[14px] md:text-[16px] lg:text-[18px]">Sign up
                {data.sections.header.userSignUp}
              </p>
            </button>
          </div>
          <div className="sm:hidden">
            {isMenuOpen ? (
              <div className="relative">
                <div onClick={handleMenuOpen}
                 className="text-primary w-8 h-8 cursor-pointer">///</div>
                <div className="absolute z-40 right-0 bg-green_light bg-white px-6 rounded-sm shadow-xl">
                  <ul className="">
                    {data.sections.header.navbar.map((item, index) => (
                      <a
                        href="#"
                        key={index}
                        className="min-w-max-content greenspace-nowrap"
                      >
                        <li
                          className={`font-bold text-black text-[14px] my-4 hover:text-primary active:text-green_dark`}
                        >
                          {item}
                        </li>
                      </a>
                    ))}
                    <li className="font-bold text-green text-[14px] my-4 hover:text-primary active:text-gray_dark cursor-pointer">
                      {data.sections.header.userLogin}
                    </li>
                    <li className="font-bold text-white text-[14px] my-4 hover:text-primary active:text-gray_dark cursor-pointer">
                      <div>{data.sections.header.userSignUp}</div>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              // <HiMenu
              //   onClick={handleMenuOpen}
              //   className="text-primary w-8 h-8 cursor-pointer"
              // />
              <div onClick={handleMenuOpen}
                 className="text-primary w-8 h-8 cursor-pointer">*</div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
