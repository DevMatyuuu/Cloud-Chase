import React, { useContext, useState, useEffect} from 'react'
import RelatedProducts from '../components/RelatedProducts'
import {useParams} from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import {Button} from '@material-tailwind/react'
import { CartContext } from '../context/CartContext'
import Modal from 'react-modal'
import Lottie from 'lottie-react'
import added from '../assets/added.json'
import loading from '../assets/loading.json'


function ProductDetails() {
  const [modalOpen, setModalOpen] = useState(false);
  const {addToCart} = useContext(CartContext)
  const {id} = useParams()
  const {data} = useFetch(`/products?populate=*&filters[id][$eq]=${id}`)
    if (!data) {
      return (
        <div className="text-white mx-auto md:w-36 md:font-bold md:text-2xl md:mt-36  mt-32 w-32 pb-[180px] md:pb-[252px] justify-center">
            <div className='mx-auto justify-center'>
              <Lottie animationData={loading}/>
           </div>
        </div>
      )
    }
  const categoryTitle = data[0].attributes.categories.data[0].attributes.title

  const handleOpenModal = () => {
      setModalOpen(true);
      setTimeout(() => {
        setModalOpen(false);
      }, 800);
    };

    const origPrice = data[0].attributes.price
    const discPercentage = 20
    const discountedPrice = origPrice - (origPrice * (discPercentage / 100))

  
  return (
    <div className='md:mb-10  pt-7 sm:pt-[30px] sl:pt-8 md:mt-16 md:pt-0 font-poppins'>
      <div className='container mx-auto w-auto bg-gradient-to-b from-gray-900 to-gray-600 md:pb-20 md:mt-10 rounded-2xl md:max-w-[1100px] max-w-[1300px] sl:max-w-[800px] sl:pb-20 md:mb-20 mb-12 pt-0  pb-20'>
       <div className='md:flex flex text-center md:gap-10 md:ml-32=0 md:w-auto md:h-auto w-32 md:pt-0 sl:pt-0 pt-10 mx-auto justify-center items-center'>
          <div className='md:relative absolute flex md:w-auto mx-auto md:mx-0 w-40 md:top-0 top-80 md:h-80 h-28'>
             <img src={`https://cloud-chase-be-production-e564.up.railway.app${data[0].attributes.image.data.attributes.url}`} className='md:max-h-[400px] md:max-w-[350px] md:w-100 md:mt-10 md:ml-0 sl:pt-10 max-h-60 mx-auto ' />
          </div>
       <div className='mt-48 font-semibold md:mt-20 md:text-start'>
          <div className='text-yellow-500 uppercase text-xs md:text-[14px] md:mb-4 sl:mb-3 mb-2'>{data[0].attributes.categories.data[0].attributes.title}</div>
          <h2 className='text-white text-sm md:text-2xl md:mb-3 md:mt-2 sl:mb-5'>{data[0].attributes.title}</h2>
          <div className='text-white md:text-[16px] mt-2 font-normal md:max-w-[500px] max-w-[500px] md:w-auto sl:w-auto w-[360px] text-[11px] md:text-start sl:text-center sl:ml-12 sl:max-w-[700px] text-center md:mb-8 '>{data[0].attributes.description}</div>
          <div className='flex sl:gap-5 sl:mt-5 mt-5 ml-24 md:ml-0'>
          <div className='text-yellow-300 md:ml-1 md:mt-3 sl:ml-80 sl:mt-4 mt-4'>{data[0].attributes.isSale ? (
          <div className='text-yellow-500'>Now: ₱{discountedPrice}<span className='grid text-slate-300'> Before: ₱{origPrice}</span></div>
          ) : (
          <div className='md:mt-3'>₱{origPrice}</div>
          )}</div>
      <div>
          <Button onClick={() => { addToCart(data, id); handleOpenModal(); }} className='bg-yellow-500 hover:bg-yellow-600 hover:text-white md:py-4 py-2 md:px-4 px-2 md:ml-5 md:text-md sl:text-xs mt-3 ml-5 text-black font-bold rounded-lg uppercase'>Add to cart</Button>
      </div>
    </div>
  </div>
 </div>
</div>
    <RelatedProducts categoryTitle={categoryTitle}/>
    <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Modal"
        className='modal fixed inset-0 flex items-center justify-center bg-transparent'
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" // Tailwind CSS classes for the modal overlay
      >
       <Lottie animationData={added} className='max-w-[400px] max-h-[400px]'/>
   </Modal>
  </div>
    
  )
}

export default ProductDetails