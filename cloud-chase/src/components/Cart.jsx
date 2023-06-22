import React, { useContext } from 'react'
import {SlClose} from 'react-icons/sl'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'
import Lottie from 'lottie-react'
import empty from '../assets/empty-cart.json'


function Cart() {
    const {setIsOpen, cart} = useContext(CartContext)
  return (
    <div className='w-full h-full px-4 shadow-2xl overflow-y-auto overflow-x-hidden'>
        <div className='flex-row '>
            <SlClose onClick={() => setIsOpen(false)} className='flex cursor-pointer justify-end text-white w-20 h-[30px] items-center md:mt-12 md:ml-96 hover:scale-110 duration-300'/>
        </div>
        <div>
        {cart.length === 0 ? (
            <div className='text-white text-2xl uppercase text-center md:pt-72'><Lottie animationData={empty} className='absolute top-[230px] left-[170px] h-40 w-40'/>cart is empty<span className='grid text-xs md:mt-5'>You can check our products and click add to cart, Thank you!</span></div>
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
  )
}

export default Cart
