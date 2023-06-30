import React from 'react';
import logo from '../assets/logo.png';
import CategoryNav from './CategoryNav';
import { Link } from 'react-router-dom';
import { SlBag } from 'react-icons/sl';
import Cart from './Cart';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import SearchForm from './SearchForm';
import Note from './Note';

function Header() {
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  return (
    <>
      <header>
        <div className='flex w-full bg-gradient-to-b from-gray-900 to-gray-600 pb-10 md:pb-0 justify-center items-center gap-20 md:gap-[600px] '>
          <div className='ml-28 md:ml-[800px] md:mt-5'>
            <Link to={`/`}>
              <img
                src={logo}
                className='h-20 w-24 md:h-32 md:w-32'
              />
            </Link>
          </div>
          <div className='absolute md:realative md:mt-5 ml-1 md:ml-[1000px] mt-28 '>
            <SearchForm />
          </div>
          <div className='flex justify-end md:mt-4'>
            <SlBag  onClick={() => setIsOpen(!isOpen)}  className='relative cursor-pointer h-28 w-8 md:right-20 sl:right-10 text-white md:ml-28' />
            <div className='absolute md:mr-20 md:mt-16 '>
            <div onClick={() => setIsOpen(!isOpen)} className='bg-yellow-500 text-black font-[8px] w-[20px] h-[20px] rounded-full md:mt-0 md:mr-0 sl:top-16 sl:right-10 mt-[64px] flex justify-center items-center tracking-[0em] cursor-pointer'>
              {itemsAmount}
            </div>
            </div>
          </div>
          <div
            className={`${isOpen ? 'right-0' : '-right-full'}  bg-gradient-to-b from-gray-900 to-gray-600 rounded-left-2xl shadow-xl fixed top-0 bottom-0 w-full z-10 max-w-[500px] transition-all duration-300`}
          >
            <Cart />
          </div>
        </div>
      </header>
      <CategoryNav />
    </>
  );
}

export default Header;
