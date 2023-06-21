import React from 'react'
import {FaFacebook, FaTwitter, FaDiscord} from 'react-icons/fa'

function Footer() {
  return (
    <div className='md:mt-40'>
      <div className='bg-gradient-to-b from-gray-900 to-gray-600 md:h-30 h-36 text-center md:pt-5 pt-10 text-white'>
       <div className='md:flex flex justify-center md:gap-5 gap-7 md:mb-5 mb-6'> 
          <div><a href=''><FaFacebook /></a></div>
          <div><a href=''><FaTwitter /></a></div>
          <div><a href=''><FaDiscord /></a></div>
        </div>
      <div className='flex text-center justify-center md:mb-3 md:gap-5 mb-5 gap-5'>
        <div><a href=''>About us</a></div>
        <div><a href=''>Contact us</a></div>
      </div>
        <div className='mb-5'>Copyright &copy; Cloud Chase 2023. All rights reserved.</div>
      </div>
    </div>
  )
}

export default Footer
