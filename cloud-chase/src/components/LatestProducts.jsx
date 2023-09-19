import React from 'react'
import ProductSlider from '../components/ProductSlider.jsx'
import useFirestoreData from '../hooks/useFirestoreData.jsx'

function LatestProducts() {

  const { newProd } = useFirestoreData();

  return (
    <div className='mb-16 font-poppins xl:mt-10'>
      <div className='container mx-auto'>
        <h2 className='lg:text-4xl text-2xl mb-10 text-center text-white font-bold'>NEW ARRIVALS</h2>
        <ProductSlider latest={newProd}/>
      </div>
    </div>
  )
}

export default LatestProducts
