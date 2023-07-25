import React from 'react'
import Faqs from '../components/Faqs'

function AboutUs() {
  return (
    <>
    <div>
        <div className='container mx-auto md:max-w-[1200px] md:rounded-xl md:px-auto text-white text-justify  bg-gradient-to-b from-gray-900 to-gray-600 px-7 pb-16 mb-10 md:pl-20 md:pr-20'>
            <h2 className='font-poppins md:text-3xl text-2xl md:pt-12 mt-8 md:mb-9 mb-7 pt-9 font-bold text-center uppercase'>about us</h2> 
            <p className='md:text-[15px] text-xs md:mb-10 mb-5'>Welcome to Cloud Chase, your ultimate destination for all things vaping! At Cloud Chase, we are dedicated to providing an exceptional vaping experience while prioritizing the safety and well-being of our customers.</p> 
            <p className='md:text-[15px] text-xs md:mb-10 mb-7'>As avid vapers ourselves, we understand the importance of quality products, expert knowledge, and responsible practices. Our mission is to offer a wide selection of premium vaping devices, e-liquids, and accessories that cater to the diverse preferences of our valued customers. We take pride in curating our inventory, sourcing products from reputable brands known for their commitment to quality and safety. Your satisfaction is our priority, and we strive to offer competitive pricing without compromising on excellence. As advocates for the vaping industry, we stay up-to-date with the latest trends, regulations, and advancements. We actively engage with the community, attending conventions and participating in advocacy efforts. Our goal is to contribute to the growth and positive representation of vaping, fostering an environment where vapers can thrive and be proud of their lifestyle.</p> 
            <p className='md:text-[15px] md:mb-7 text-xs'>Please note that Cloud Chase strictly adheres to legal age restrictions and regulations. Our products are not allowed to be sold or used by individuals under the legal vaping age. We encourage responsible vaping practices and prioritize the well-being of our customers.
              Thank you for choosing Cloud Chase. We look forward to serving you and exceeding your vaping expectations!</p>
        </div>
    </div>
    <Faqs />
    </>
  )
}

export default AboutUs