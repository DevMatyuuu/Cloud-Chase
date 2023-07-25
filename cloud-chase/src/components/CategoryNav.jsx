import React from 'react';
import { Link } from 'react-router-dom';
import '/hover.css';
import CategoryDropdown from './CategoryDropdown';

function CategoryNav() {
  return (
    <>
      <nav>
        <div className='hidden md:flex sl:flex lg:flex md:max-w-[2000px] sl:max-w-[1400px] max-w-[1000px] gap-8 md:pt-1 sm:pt-5 sl:pt-5 pt-5 sm:gap-24 sl:gap-32 lg:gap-40 md:gap-32 md:text-md sm:text-sm sl:text-sm md:text-[15px] text-xs justify-center text-white font-bold bg-gradient-to-r from-gray-700 via-gray-900 to-black h-14 uppercase font-poppins sm:mb-10 shadow-xl'>
          <div>
            <p className="md:mt-[15px] relative w-max two flex md:gap-20">
              <Link to={`/Home`} className=''>Home</Link>
              <span className="absolute -bottom-[8px] left-1/2 w-0 transition-all h-1 bg-white"></span>
              <span className="absolute -bottom-[8px] right-1/2 w-0 transition-all h-1 bg-white"></span>
            </p>
          </div>
          <div>
            <p className="md:mt-[15px] relative w-max two flex md:gap-20 z-50">
              <CategoryDropdown />
              <span className="absolute -bottom-[8px] left-1/2 w-0 transition-all h-1 bg-white"></span>
              <span className="absolute -bottom-[8px] right-1/2 w-0 transition-all h-1 bg-white"></span>
            </p>
          </div>
          <div>
            <p className="md:mt-[15px] relative w-max two flex md:gap-20">
              <Link to={`/about`} className=''>About Us</Link>
              <span className="absolute -bottom-[8px] left-1/2 w-0 transition-all h-1 bg-white"></span>
              <span className="absolute -bottom-[8px] right-1/2 w-0 transition-all h-1 bg-white"></span>
            </p>
          </div>
          <div>
            <p className="md:mt-[15px] relative w-max two flex md:gap-20">
              <Link to={`/contact`}>Contact Us</Link>
              <span className="absolute -bottom-[8px] left-1/2 w-0 transition-all h-1 bg-white"></span>
              <span className="absolute -bottom-[8px] right-1/2 w-0 transition-all h-1 bg-white"></span>
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}

export default CategoryNav;
