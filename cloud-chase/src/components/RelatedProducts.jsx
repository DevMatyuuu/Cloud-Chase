import React from 'react'
import RelatedSlider from './RelatedSlider'
import useFirestoreData from '../hooks/useFirestoreData'

function RelatedProducts({categoryTitle}) {
    const { product } = useFirestoreData();

    const data = product.find(products => products.categories === categoryTitle);

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
