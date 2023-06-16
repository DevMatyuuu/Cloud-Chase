import React from 'react'
import ProductSlider from '../components/ProductSlider.jsx'
import useFetch from '../hooks/useFetch.jsx'

function LatestProducts() {

    const { data } = useFetch('/products?populate=*&filters[isNew]=true')

  return (
    <div className='mb-16'>
      <div className='container mx-auto'>
        <h2 className='text-xl mb-10 text-center text-white'>LATEST PRODUCTS</h2>
      </div>
      <ProductSlider data={data}/>
      
    </div>
  )
}

export default LatestProducts
