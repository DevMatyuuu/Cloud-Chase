import React, { useContext, useState} from 'react'
import {useParams} from 'react-router-dom'
import useFirestoreData from '../hooks/useFirestoreData'
import {Button} from '@material-tailwind/react'
import { CartContext } from '../context/CartContext'
import Modal from 'react-modal'
import Lottie from 'lottie-react'
import added from '../assets/added.json'
import loading from '../assets/loading.json'
import RelatedProducts from '../components/RelatedProducts'


function ProductDetails() {
  const { product } = useFirestoreData();
  const [modalOpen, setModalOpen] = useState(false);
  const {addToCart} = useContext(CartContext)
  const { id } = useParams();
  const paramsId = id;
  const [showFullDescription, setShowFullDescription] = useState(true);
  
  const selectedProduct = product.find(product => product.id === paramsId);
;
    if (!selectedProduct) {
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

    const origPrice = selectedProduct.price
    const discPercentage = 20
    const discountedPrice = origPrice - (origPrice * (discPercentage / 100))

  
  return (
    <div className='md:mb-10  pt-7 sm:pt-[10px] md:mt-16 md:pt-0 font-poppins'>
      <div className='w-[90%] mx-auto pt-5 lg:pt-0 bg-gradient-to-b from-gray-900 to-gray-600 rounded-xl mb-5'>
        <div className='flex flex-col h-auto pb-10 lg:justify-center sm:h-auto'>
          <div className={`xl:flex ${selectedProduct.categories === 'pods' ? 'xl:mx-20 mx-8' : 'xl:mx-20'} lg:py-28`}>
            <div className={`${selectedProduct.categories === 'pods' ? 'xl:w-[300%]' : 'lg:w-[80%]'} flex justify-center  mb-2 lg:w-[900px]`}>
              <img src={selectedProduct.image} className='h-32  xl:h-[30vh] lg:h-[30vh]'/>
            </div>
            <div>
              <div className='flex justify-center xl:justify-start text-sm lg:text-xl xl:text-2xl uppercase mb-2 font-semibold text-violet-300 lg:pl-8'>
                <span className='first-letter:uppercase'>{selectedProduct.categories}</span>
              </div>
              <div className='flex justify-center xl:justify-start text-white text-sm lg:text-lg xl:text-2xl font-bold lg:pl-8'>
                <span className='first-letter:uppercase'>{selectedProduct.title}</span>
              </div>
              <div className='mx-auto lg:mx-0 text-justify lg:justify-start text-white text-[8px] lg:text-sm xl:text-base lg:w-full mt-5 xl:mt-7 lg:mt-2 lg:pl-8 pb-5 lg:pb-0'>
                  {selectedProduct.categories != 'disposable' ? (
                    showFullDescription ? (
                      <div className='lg:w-[70%] xl:mx-0 mx-auto xl:w-[80%]'>
                        <p className='line-clamp-4'>{selectedProduct.description}</p>
                        <span className='float-right cursor-pointer mt-1 hover:text-violet-400' onClick={() => setShowFullDescription(false)}>Read more</span>
                      </div>
                    ) : (
                      <div className='xl:w-[80%] lg:w-[70%] xl:mx-0 mx-auto'>
                        <p className='line-clamp-none'>{selectedProduct.description}</p>
                        <span className='float-right cursor-pointer hover:text-violet-400' onClick={() => setShowFullDescription(true)}>Read less</span>
                      </div>
                    )
                  ) : (
                    <p className='xl:w-[85%] lg:w-[70%] w-[70%] mx-auto xl:mx-0'>{selectedProduct.description}</p>
                  )}
              </div>
              <div className='flex justify-center items-center xl:justify-start  text-white text-xs lg:text-sm xl:text-base w-[70%] xl:w-[50%] mx-auto xl:mx-0 mt-5 lg:mt-10 xl:pl-8'>
                <div className={`flex-col mr-14 font-bold ${selectedProduct.categories === 'pods' ?  'w-[10%]' : 'w-[70%]'}`}>
                  <span className='text-white'>
                    ₱{discountedPrice}
                  </span>
                  <div>
                    {selectedProduct.isSale ? <span className='text-slate-300 text-[10px] xl:text-sm'>Original Price: ₱{origPrice}</span> : <span></span>}
                </div>
                </div>
                <div className='flex justify-center lg:w-[40%] w-[60%]'>
                <Button onClick={() => {addToCart(selectedProduct, paramsId); handleOpenModal();}} className='lg:px-2 lg:py-4 py-2 px-0  bg-black text-white text-[8px] lg:text-sm w-[500px]'>Add to Cart</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<RelatedProducts category={selectedProduct}/>
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