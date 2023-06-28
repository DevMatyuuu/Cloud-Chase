import React, { useContext } from 'react'
import {SlClose} from 'react-icons/sl'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'
import Lottie from 'lottie-react'
import empty from '../assets/empty-cart.json'
import {Button} from '@material-tailwind/react'
import {IoArrowForward} from 'react-icons/io5'


function Cart() {
    const {setIsOpen, cart, total} = useContext(CartContext)
  return (
    <>
    <div className='w-full md:h-[720px] sl:h-[650px] px-4 shadow-left-2xl rounded-xl overflow-y-auto overflow-x-hidden'>
        <div className='flex-row'>
            <SlClose onClick={() => setIsOpen(false)} className='flex  sl:ml-[400px] cursor-pointer justify-end text-white w-20 h-[30px] items-center md:mt-12 md:ml-96 sl:mt-10 hover:scale-110 duration-300'/>
        </div>
        <div>
        {cart.length === 0 ? (
            <div className='text-white text-2xl uppercase text-center md:pt-72 sl:pt-[300px]'><Lottie animationData={empty} className='absolute top-[230px] left-[171px] h-40 w-40'/>cart is empty<span className='grid text-xs md:mt-5'>You can check our products and click add to cart, Thank you!</span></div>
            ) : (
            <div className="text-white">
                {cart.map((item) => (
                <div>
                    <CartItem item={item} key={item.id} />
                </div>
                ))}
            </div>
            )}
            
        </div>
    </div>
    <div>
      <div>
        <div>
            {cart.length >= 1 && (
                   <div className='flex md:ml-10 md:mt-7 sl:ml-[65px] sl:mt-10 text-xl text-white font-extrabold'>
                    <div className='uppercase'>total:</div><div className='md:ml-72 sl:ml-[224px]'>₱{total}</div>
              </div>
            )}
        </div>
        <div className='flex'>
          <Button className='uppercase hover:bg-yellow-600 hover:text-white rounded-xl bg-yellow-500 text-black md:ml-9 md:mt-7 md:py-4 md:px-16 sl:py-3 sl:px-10 sl:mt-5 sl:mb-5 sl:ml-16' >Clear cart</Button>
          <Button className='flex uppercase hover:bg-yellow-600 hover:text-white rounded-xl bg-yellow-500 text-black md:ml-5 md:mt-7 md:py-4 md:px-16 sl:py-3 sl:px-10 sl:ml-12 sl:mt-5 sl:mb-5'>
            <span>Checkout</span> <IoArrowForward className='ml-2 mt-[3px]' />
           
          </Button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart
