import React from 'react'
import {Link} from 'react-router-dom'



function Product({product}) {
    const origPrice = product.attributes.price
    const discPercentage = 20
    const discountedPrice = origPrice - (origPrice * (discPercentage / 100))

  return (
    <Link to={`/product/${product.id}`}>
        <div className='grad bg-gradient-to-b from-gray-900 to-gray-600 w-full md:h-[320px] md:max-w-[300px] max-w-[200px] sm:h-[300px] sl:h-[280px] h-[250px] rounded-[8px] overflow-hidden relative group mx-auto justify-center shadow-xl'>
            {product.attributes.isNew ? (
            <div className='absolute bg-amber-400 text-black text-[10px] font-bold uppercase top-3 right-4 px-2 rounded-lg'>New</div>
            ) : ('')}
                <div className='md:w-full md:h-[180px] sm:w-[full] sm:h-[180px] flex items-center justify-center md:mt-0 sl:mt-5 sm:mt-0 mt-5'>
                     <img src={`http://localhost:1337${product.attributes.image.data.attributes.url}`} className='sm:w-[100px] md:h-[120px] h-[80px] md:mt-5 sm:mt-0 sl:mt-0 mt-8 group-hover:scale-105 transition-all'/>
                </div>
                <div className='md:mb-5  md:ml-5 md:mt-0 sl:mt-8  text-white p-2 sl:ml-4'>
                    <div className='text-sm  font-bold mb-2 md:mt-0 md:ml-0 mt-2 ml-2 text-yellow-500 md:mb-5'>
                        {product.attributes.categories.data[0].attributes.title}
                    </div>
                    <div className='md:text-sm text-xs md:ml-0 ml-2 font-bold uppercase '>
                        {product.attributes.title.substring(0,35)}
                    </div>
                     {product.attributes.isSale ? (
                     <div className='absolute text-slate-200 text-xs font-bold uppercase left-20  md:bottom-7 bottom-2 px-2 rounded-lg'>
                        Original price: ₱{origPrice}
                    </div>
                     ) : ('')}
                    <div className='font-semibold text-yellow-500 mt-4'>
                    {product.attributes.isSale ? (
                     <div className='absolute text-yellow-500 text-sm font-bold uppercase md:left-5 left-2 md:bottom-6 bottom-2 px-2 rounded-lg'>
                        ₱{discountedPrice}
                    </div>
                     ) : (<div className='absolute text-yellow-500 text-sm font-bold uppercase md:left-5 left-2 md:bottom-6 bottom-2 px-2 rounded-lg '>
                     ₱{origPrice}
                 </div>)}
                    </div>
                     {product.attributes.isSale ? (
                     <div className='absolute bg-amber-400 text-black text-[10px] font-bold uppercase top-3 left-4  px-2 rounded-lg'>sale</div>
                     ) : ('')}
                    
                </div>

            
        </div>
    </Link>
  )
}

export default Product
