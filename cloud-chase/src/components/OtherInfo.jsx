import React from 'react'
import { otherInfo } from '../../constant'


function OtherInfo() {
  return (
    <section className='h-[30vh]'>
      <div className='bg-gradient-to-r from-gray-700 via-gray-900 to-black lg:h-[25vh] xl:h-[25vh] h-[20vh]'>
        <div className='flex justify-center xl:gap-40 lg:gap-28 gap-10 sm:gap-12 text-white'>
          {otherInfo.map((item) => (
            <div>
              <div className='text-center xl:flex flex-col items-center lg:pt-14 xl:pt-[70px] pt-12 gap-5' key={item.id}>
                <div className='flex xl:justify-start justify-center h-12 xl:h-auto'>{item.icon}</div>
                <h1 className='xl:text-xl lg:text-base text-[8px] sm:text-sm font-bold'>{item.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OtherInfo