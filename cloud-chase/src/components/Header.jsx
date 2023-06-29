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
        <div className='flex w-full bg-gradient-to-b from-gray-900 to-gray-600 pb-12 justify-center items-center gap-28 '>
          <div className='ml-36'>
            <Link to={`/`}>
              <img
                src={logo}
                className='h-20 w-20 md:h-20 ml-4'
              />
            </Link>
          </div>
          <div className='absolute md:mt-10 ml-1'>
            <SearchForm />
          </div>
          <div onClick={() => setIsOpen(!isOpen)} className='flex justify-end'>
            <SlBag className='relative hover:scale-110 hover:duration-300 cursor-pointer h-28 w-8 md:right-20 right-8 sl:right-10 text-white md:ml-28' />
            <div className='absolute mr-8'>
            <div className='bg-yellow-500 text-black font-[8px] w-[20px] h-[22px] rounded-full md:top-16 md:right-20 sl:top-16 sl:right-10 mt-16 flex justify-center items-center tracking-[0em]'>
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
