import React from 'react'
import logo from '../assets/logo.png'
import CategoryNav from './CategoryNav'
import { Link } from 'react-router-dom'
import {SlBag} from 'react-icons/sl'

function Header() {
  return (
    <>
    <header>
      <div className='flex w-full bg-gradient-to-b from-gray-900 to-gray-600'>
        <div className='mx-auto'>
            <Link to={`/`}>
            <img  src={logo} className='flex md:h-28 sl:h-28 sm:h-28 h-28 ml-12 md:ml-0 sm:ml-16 sl:ml-16' />
            </Link>
          </div>
        <div className='flex jusitfy-end'>
           <SlBag className='relative cursor-pointer h-28 w-8 md:right-20 right-10 sl:right-20 text-white'/>
        </div>
      </div>
    </header>
    <CategoryNav />
    </>
  )
}

export default Header
