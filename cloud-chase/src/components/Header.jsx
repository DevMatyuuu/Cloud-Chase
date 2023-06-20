import React from 'react'
import logo from '../assets/logo.png'
import CategoryNav from './CategoryNav'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <header>
      <div className='flex w-full bg-gradient-to-b from-gray-900 to-gray-600 justify-center'>
        <Link to={`/`}>
        <img  src={logo} className='flex md:h-28 sl:h-28 sm:h-28 h-20' />
        </Link>
      </div>
    </header>
    <CategoryNav />
    </>
  )
}

export default Header
