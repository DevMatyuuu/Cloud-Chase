import React, { useContext, useState, useEffect} from 'react'
import RelatedProducts from '../components/RelatedProducts'
import {useParams} from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import {Button} from '@material-tailwind/react'
import { CartContext } from '../context/CartContext'
import Modal from 'react-modal'


function ProductDetails() {
  const [modalOpen, setModalOpen] = useState(false);
  const {addToCart} = useContext(CartContext)
  const {id} = useParams()
  const {data} = useFetch(`/products?populate=*&filters[id][$eq]=${id}`)
    if (!data) {
      return <div className='mx-auto'>loading...</div>
    }
  const categoryTitle = data[0].attributes.categories.data[0].attributes.title

  const handleOpenModal = () => {
    setModalOpen(true);
    setTimeout(() => {
      setModalOpen(false);
    }, 1000);
  };

  
  return (
    <div className='mb-16 pt-16 sm:pt-[30px] md:pt-0 font-poppins'>
      <div className='container mx-auto w-auto bg-gradient-to-b from-gray-900 to-gray-600 md:pb-20 md:mt-10 rounded-2xl max-w-[1300px] md:mb-20'>
        <div className='md:flex flex-row text-center md:gap-5 md:ml-32'>
          <div>
            <img src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`} className='md:max-h-[400px] md:max-w-[350px] md:w-100 md:mt-20 md:ml-28 max-h-60 mx-auto mt-0'/>
          </div>
          <div className='mt-3 font-semibold md:mt-20 md:text-start'>
            <div className='text-yellow-500 uppercase text-sm md:text-md md:mb-4 '>{data[0].attributes.categories.data[0].attributes.title}</div>
            <h2 className='text-white text-lg md:text-2xl md:mb-3 md:mt-2'>{data[0].attributes.title}</h2>
            <div className='text-white md:text-[16px] mt-2 font-normal md:max-w-[500px] max-w-[200px] text-start md:mb-8'>{data[0].attributes.description}</div>
          <div className='flex'>
            <div className='text-yellow-300 md:ml-1 md:mt-6'>₱{data[0].attributes.price}</div>
            <Button onClick={() => {addToCart(data, id); handleOpenModal();}} className='bg-yellow-500 hover:bg-yellow-700 hover:text-white md:py-4 py-2 md:px-4 px-2 md:ml-5 md:text-md text-xs mt-3 text-black font-extrabold rounded-lg uppercase'>Add to cart</Button>
          </div>
          </div>
        </div>

      </div>
      <RelatedProducts categoryTitle={categoryTitle}/>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Modal"
      >
        <h2>Modal Content</h2>
        {/* Additional content */}
      </Modal>
    </div>
    
  )
}

export default ProductDetails