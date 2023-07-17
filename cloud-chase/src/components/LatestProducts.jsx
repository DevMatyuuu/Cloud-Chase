import React from 'react'
import ProductSlider from '../components/ProductSlider.jsx'
import useFetch from '../hooks/useFetch.jsx'

function LatestProducts() {

    const { data } = useFetch('/products?populate=*&filters[isNew]=true')

  return (
    <div className='mb-16 font-poppins'>
      <div className='container mx-auto'>
        <h2 className='lg:text-4xl text-2xl mb-10 text-center text-white font-bold'>NEW ARRIVAL</h2>
      </div>
      <ProductSlider data={data}/>
      
    </div>
  )
}

export default LatestProducts
