import React from 'react'
import ProductSlider from '../components/ProductSlider.jsx'
import useFirestoreData from '../hooks/useFirestoreData.jsx'

function LatestProducts() {

  const { latest } = useFirestoreData();

  console.log(latest)

  return (
    <div className='mb-16 font-poppins'>
      <div className='container mx-auto'>
        <h2 className='lg:text-4xl text-2xl mb-10 text-center text-white font-bold'>NEW ARRIVALS</h2>
      </div>
      <ProductSlider latest={latest}/>
      
    </div>
  )
}

export default LatestProducts
