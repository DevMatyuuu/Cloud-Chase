import React from 'react'
import {FiSearch} from 'react-icons/fi'

function SearchForm() {
  return (
    <form>
      <div>
        <div className='absolute bg-yellow-500 w-[70px] md:h-[35px] sl:h-[30px] rounded-r-lg md:ml-[250px] sl:ml-[155px] sl:mt-11 cursor-pointer'><FiSearch className='mt-2 sl:mt-[7px] sl:ml-[28px] ml-7'/></div>
        <input type='text' placeholder='Search product here...' className='input rounded-lg md:h-[35px] sl:h-[30px] sl:mt-11 sl:w-56 sl:mr-16 md:w-80 md:pl-3 sl:pl-2  sl:text-xs md:pb-1 text-sm'></input> 
      </div>
    </form>
  )
}

export default SearchForm
