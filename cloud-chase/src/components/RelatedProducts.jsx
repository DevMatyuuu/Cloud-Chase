import React from 'react'
import useFetch from '../hooks/useFetch'
import RelatedSlider from './RelatedSlider'

function RelatedProducts({categoryTitle}) {
    const {data} = useFetch(`/products?populate=*&filters[categories][title]=${categoryTitle}`)
  return (
    <div>
        <div className='container mx-auto justify-center'>
            <div className='uppercase text-center sl:mt-10 sl:mb-10 md:mt-10 md:mb-20 text-white text-2xl mb-10'>related products</div>
            <RelatedSlider data={data} />
        </div>
    </div>
  )
}

export default RelatedProducts
