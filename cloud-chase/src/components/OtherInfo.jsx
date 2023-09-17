import React from 'react'
import { otherInfo } from '../../constant'


function OtherInfo() {
  return (
    <section className='h-[30vh]'>
      <div className='bg-gradient-to-r from-gray-700 via-gray-900 to-black xl:h-[20vh]'>
        <div className='flex justify-center gap-36 text-white'>
          {otherInfo.map((item) => (
            <div>
              <div className='text-center flex items-center pt-[70px] gap-5' key={item.id}>
                <div>{item.icon}</div>
                <h1 className='text-xl font-bold'>{item.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OtherInfo