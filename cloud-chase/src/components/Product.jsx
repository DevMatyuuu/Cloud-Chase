import React from 'react'
import {Link} from 'react-router-dom'

function Product({product}) {
  return (
    <Link to={`/product/${product.id}`}>
        <div className='grad bg-gradient-to-b from-gray-900 to-gray-600 w-full md:h-[300px] md:max-w-[300px] max-w-[200px] sm:h-[300px] sl:h-[280px] rounded-[8px] overflow-hidden relative group justify-center shadow-xl'>
            {product.attributes.isNew ? (
            <div className='absolute bg-amber-400 text-black text-[10px] font-bold uppercase top-3 right-4 px-2 rounded-lg'>New</div>
            ) : ('')}
                <div className='md:w-full md:h-[180px] sm:w-[full] sm:h-[180px] flex items-center justify-center md:mt-0 sl:mt-5 sm:mt-0 mt-5'>
                     <img src={`http://localhost:1337${product.attributes.image.data.attributes.url}`} className='sm-md:w-[160px] sm-md:h-[160px] h-[120px] group-hover:scale-105 transition-all'/>
                </div>
                <div className='md:mb-5  md:ml-5 md:mt-0 sl:mt-8  text-white p-2 sl:ml-4'>
                    <div className='text-sm  font-bold mb-2'>
                        {product.attributes.categories.data[0].attributes.title}
                    </div>
                    <div className='text-sm  font-bold'>
                        {product.attributes.title.substring(0,35)}
                    </div>
                    <div className='text-sm text-yellow-500 font-bold mt-2'>
                         ₱{product.attributes.price}
                    </div>
                </div>

            
        </div>
    </Link>
  )
}

export default Product
