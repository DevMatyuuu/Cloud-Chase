import React, { useContext } from 'react'
import {SlClose} from 'react-icons/sl'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'

function Cart() {
    const {setIsOpen, cart} = useContext(CartContext)
  return (
    <div className='w-full h-full px-4'>
        <div className='flex-row '>
            <SlClose onClick={() => setIsOpen(false)} className='flex cursor-pointer justify-end text-white w-20 h-[30px] items-center md:mt-12 md:ml-96 hover:scale-110 duration-300'/>
        </div>
        <div>
            <div className='text-white'>
                {cart.map((item) => {
                    return (
                        <div>
                            <CartItem item={item} key={item}/>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Cart
