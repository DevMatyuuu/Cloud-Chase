import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'


function CategoryNav() {
    const {data} = useFetch('/categories')
  return (
    <aside>
        <div className='flex md:max-w-[2000px] sl:max-w-[1400px] max-w-[1000px] gap-8 md:pt-1 sm:pt-5 sl:pt-5 pt-5 sm:gap-24 sl:gap-32 lg:gap-40 md:gap-32 md:text-md sm:text-sm sl:text-sm md:text-[15px] text-xs justify-center text-slate-100 font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-violet-800  h-14  uppercase font-poppins sm:mb-10 shadow-xl'>
         {data?.map((category) => { 
          return (
            <Link className="md:mt-4 hover:text-white hover:scale-110" to={`/products/${category.id}`} key={category.id}>
              {category.attributes.title}</Link>
          )
         })}
        </div>
    </aside>
  )
}

export default CategoryNav
