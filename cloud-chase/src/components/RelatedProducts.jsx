import React from 'react'
import useFetch from '../hooks/useFetch'
import ProductSlider from './ProductSlider'

function RelatedProducts({categoryTitle}) {
    const {data} = useFetch(`/products?populate=*&filters[categories][title]=${categoryTitle}`)
  return (
    <div>
        <div className='container mx-auto'>
            <div className='uppercase text-center sl:mt-10 sl:mb-10 md:mt-10 md:mb-20 text-white text-2xl mb-10'>related products</div>
            <ProductSlider data={data} />
        </div>
    </div>
  )
}

export default RelatedProducts
