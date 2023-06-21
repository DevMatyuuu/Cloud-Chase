import React from 'react'
import logo from '../assets/logo.png'
import CategoryNav from './CategoryNav'
import { Link } from 'react-router-dom'
import {SlBag} from 'react-icons/sl'
import Cart from './Cart'
import {CartContext} from '../context/CartContext'
import { useContext } from 'react'

function Header() {
  const {isOpen, setIsOpen, itemsAmount} = useContext(CartContext)
  return (
    <>
    <header>
      <div className='flex w-full bg-gradient-to-b from-gray-900 to-gray-600'>
        <div className='mx-auto'>
            <Link to={`/`}>
            <img  src={logo} className='flex md:h-28 sl:h-28 sm:h-28 h-28 ml-12 md:ml-10 sm:ml-16 sl:ml-16' />
            </Link>
          </div>
        <div onClick={() => setIsOpen(!isOpen)} className='flex jusitfy-end'>
           <SlBag className='relative hover:scale-110 hover:duration-300 cursor-pointer h-28 w-8 md:right-20 right-10 sl:right-20 text-white'/>
           <div className='bg-yellow-500 text-black font-[8px] absolute w-[20px] h-[22px] rounded-full top-16 right-20 flex justify-center items-center tracking-[-0.1em]'>
                 {itemsAmount}
            </div>
        </div>
        <div className={`${isOpen ? 'right-0' : '-right-full'}  bg-gradient-to-b from-gray-900 to-gray-600 rounded-left-2xl shadow-xl fixed top-0 bottom-0 w-full z-10 max-w-[500px] transition-all duration-300`}>
          <Cart />
        </div>
      </div>
    </header>
    <CategoryNav />
    </>
  )
}

export default Header
