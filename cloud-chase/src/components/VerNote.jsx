import React from 'react'
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Tooltip, Typography } from '@material-tailwind/react';

function VerNote() {
  return (
    <div>
       <Tooltip 
      placement="right"
      className="bg-white border border-blue-gray-50 shadow-xl shadow-black/10 md:px-3 md:pr-5 md:py-2 md:mt-3 md:pt-4 px-2 mt-3 py-2"
      content={
        <div className="md:w-[300px] md:h-[100px] w-[250px] h-[170px] z-20 ">
          <Typography color="blue-gray" className="font-medium text-black absolute md:text-[13px] text-xs">
                Access to our website is restricted to individuals who are 21 years of age or older. This age restriction is in place to align with legal regulations and to prioritize the well-being of our users, especially considering the potential health risks associated with certain content on our site.
         </Typography> 
        </div>
      }
    >
      <InformationCircleIcon 
        strokeWidth={2} 
        className="text-blue-gray-500 w-5 h-5 cursor-pointer" 
      />
    </Tooltip>
    </div>
  )
}

export default VerNote