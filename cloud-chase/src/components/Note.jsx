import React from 'react'
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Tooltip, Typography } from '@material-tailwind/react';

function Note() {
  return (
    <div>
       <Tooltip 
      placement="right"
      className="bg-white border border-blue-gray-50 shadow-xl shadow-black/10 md:px-6 md:py-1 md:mt-3 md:pt-4 px-2 mt-3 py-2"
      content={
        <div className="md:w-[400px] md:h-[130px] w-[250px] h-[170px] z-20 ">
          <Typography color="blue-gray" className="font-medium text-black absolute md:text-md text-xs">Advisory:<span className='grid md:mt-1'>This Online Vape Shop is not official. Certain portions of the website's content are sourced from external parties and not from us. While we have taken significant efforts to ensure the accuracy and relevance of the information presented on our website, we want to provide transparency to our users regarding the ownership of these specific portions of the content.</span></Typography>
          
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

export default Note