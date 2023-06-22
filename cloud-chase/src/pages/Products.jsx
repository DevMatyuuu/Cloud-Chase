import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import useFetch from '../hooks/useFetch'
import Product from '../components/Product'


function Products({product}) {
  const {id} = useParams()
  const {data} = useFetch(`/products?populate=*&filters[categories][id][$eq]=${id}`)
  const [title, setTitle] = useState(null)
  
  useEffect(() => {
    if (data) {
      setTitle(data[0].attributes.categories.data[0].attributes.title)
    }
  })
  return (
    <div className='mb-16 pt-20 md:pb-16 sm:pt-0 font-poppins'>
      <div className='container mx-auto'>
        <main>
          <div className='text-white text-4xl uppercase font-bold ml-5 sl:ml-20 md:ml-5'>
            {title} Items
          </div>
          <div className='grid md:grid-cols-4 sl:grid-cols-3 sm:grid-cols-3 grid-cols-2 md:gap-10 md:mt-20 md:h-auto md:w-auto w-100 md:ml-0 ml-3 gap-3 mt-10'>
            {data?.map(product =>{
              return(
                <Product product={product} key={product.id}/>
              )
            })}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Products