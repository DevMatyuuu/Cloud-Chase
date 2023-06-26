import React from 'react'
import logo from '../assets/logo.png'
import CategoryNav from './CategoryNav'
import { Link } from 'react-router-dom'
import {SlBag} from 'react-icons/sl'
import Cart from './Cart'
import {CartContext} from '../context/CartContext'
import { useContext } from 'react'
import SearchForm from './SearchForm'
import Note from './Note'


function Header() {
  const {isOpen, setIsOpen, itemsAmount} = useContext(CartContext)
  return (
    <>
    <header>
      <div className='flex w-full bg-gradient-to-b from-gray-900 to-gray-600'>
        <div  className='md:mt-12 md:ml-[80px] sl:ml-[117px] sl:mt-14 text-white'>
            <Note/></div>
        <div className='mx-auto'>
            <Link to={`/`}>
            <img  src={logo} className='flex md:h-28 sl:h-28 sm:h-28 h-28 ml-12 md:ml-[350px] sm:ml-16 sl:ml-48' />
            </Link>
          </div>
          <div className='flex md:mt-[43px] md:mr-28'><SearchForm /></div>
        <div onClick={() => setIsOpen(!isOpen)} className='flex jusitfy-end'>
            <SlBag className='relative hover:scale-110 hover:duration-300 cursor-pointer h-28 w-8 md:right-20 right-10 sl:right-10 text-white'/>
           <div className='bg-yellow-500 text-black font-[8px] absolute w-[20px] h-[22px] rounded-full md:top-16 md:right-20 sl:top-16 sl:right-10  flex justify-center items-center tracking-[0em]'>
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
