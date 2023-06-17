import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

function CategoryNav() {
    const {data} = useFetch('/categories')
  return (
    <aside>
        <div className='flex gap-40 text-md justify-center text-black font-bold bg-yellow-500 h-14  uppercase font-poppins sm:mb-10 shadow-xl'>
         {data?.map((category) => { 
          return (
            <Link className="md:mt-4 hover:text-white hover:scale-110 " to={`/products/${category.id}`} key={category.id}>
              {category.attributes.title}</Link>
          )
         })}
        </div>
    </aside>
  )
}

export default CategoryNav
