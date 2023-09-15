import React, { useContext, useState} from 'react'
import {useParams} from 'react-router-dom'
import useFirestoreData from '../hooks/useFirestoreData'
import {Button} from '@material-tailwind/react'
import { CartContext } from '../context/CartContext'
import Modal from 'react-modal'
import Lottie from 'lottie-react'
import added from '../assets/added.json'
import loading from '../assets/loading.json'
import RelatedSlider from '../components/RelatedSlider'
import RelatedProducts from '../components/RelatedProducts'


function ProductDetails() {
  const { product } = useFirestoreData();
  const [modalOpen, setModalOpen] = useState(false);
  const {addToCart} = useContext(CartContext)
  const { id } = useParams();
  const paramsId = id;
  
  const selectedCategory = product.find(product => product.id === paramsId);
;
  
    if (!selectedCategory) {
      return (
        <div className="text-white mx-auto md:w-36 md:font-bold md:text-2xl md:mt-36  mt-32 w-32 pb-[180px] md:pb-[252px] justify-center">
            <div className='mx-auto justify-center'>
              <Lottie animationData={loading}/>
           </div>
        </div>
      )
    }


  const handleOpenModal = () => {
      setModalOpen(true);
      setTimeout(() => {
        setModalOpen(false);
      }, 800);
    };

    const origPrice = selectedCategory.price
    const discPercentage = 20
    const discountedPrice = origPrice - (origPrice * (discPercentage / 100))

  
  return (
    <div className='md:mb-10  pt-7 sm:pt-[10px] sl:pt-8 md:mt-16 md:pt-0 font-poppins'>
      <div className='w-[90%] mx-auto pt-8 lg:pt-0 bg-gradient-to-b from-gray-900 to-gray-600 rounded-xl mb-5'>
        <div className='flex flex-col h-[60vh] lg:justify-center sm:h-[50vh]'>
          <div className='lg:flex mx-20'>
            <div className='flex justify-center  mb-2 xl:w-[80%] lg:w-[900px]'>
              <img src={selectedCategory.image} className='h-32  xl:h-[30vh] lg:h-[30vh]'/>
            </div>
            <div>
              <div className='flex justify-center lg:justify-start text-sm lg:text-xl xl:text-2xl uppercase mb-2 font-semibold text-violet-300 lg:pl-8'>
                <span className='first-letter:uppercase'>{selectedCategory.categories}</span>
              </div>
              <div className='flex justify-center lg:justify-start text-white text-sm lg:text-lg xl:text-2xl font-bold lg:pl-8'>
                <span className='first-letter:uppercase'>{selectedCategory.title}</span>
              </div>
              <div className='mx-auto lg:mx-0 text-justify lg:justify-start text-white text-xs lg:text-sm xl:text-base w-[70%] lg:w-full xl:w-[85%] mt-5 xl:mt-7 lg:mt-2 lg:pl-8'>
                <p>{selectedCategory.description}</p>
              </div>
              <div className='flex justify-center lg:justify-start text-white text-xs lg:text-sm xl:text-base w-[70%] xl:w-[50%] mx-auto lg:mx-0 mt-5 lg:mt-10 lg:pl-8'>
                <div className='flex-col mr-14 font-bold w-[50%]'>
                  <span className='text-violet-300'>
                    ₱{discountedPrice}
                  </span>
                  <div>
                    {selectedCategory.isSale ? <span className='text-slate-300'>Original Price: ₱{origPrice}</span> : <span></span>}
                </div>
                </div>
                <div className='flex justify-center w-[40%]'>
                <Button onClick={() => {addToCart(selectedCategory, paramsId); handleOpenModal();}} className='px-2 py-1 bg-black text-white text-xs'>Add to Cart</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<RelatedProducts category={selectedCategory}/>
    <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Modal"
        className='modal z-50 fixed inset-0 flex items-center justify-center bg-transparent'
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" // Tailwind CSS classes for the modal overlay
      >
       <Lottie animationData={added} className='max-w-[400px] max-h-[400px]'/>
   </Modal>
  </div>
    
  )
}

export default ProductDetails