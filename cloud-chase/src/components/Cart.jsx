import React, { useContext, useEffect } from 'react';
import { SlClose } from 'react-icons/sl';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import Lottie from 'lottie-react';
import empty from '../assets/empty-cart.json';
import { Button } from '@material-tailwind/react';
import { IoArrowForward } from 'react-icons/io5';


function Cart() {
  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);
  const isCartEmpty = cart.length === 0;

  useEffect(() => {
    // Save cart data to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  console.log(cart)
  return (
    <>
      <div className={`lg:w-full flex-col justify-center md:h-[75vh] h-[500px] ${isCartEmpty ? 'h-[800px] overflow-y-hidden' : 'h-auto'} max-h-full px-4 shadow-left-2xl rounded-xl`}>
        <div className='flex-row'>
          <SlClose
            onClick={() => setIsOpen(false)}
            className='flex sl:ml-[400px] cursor-pointer justify-end text-white w-20 h-[30px] items-center md:mt-7 md:mb-5 md:ml-96 sl:mt-10 mt-10 hover:scale-110 duration-300'
          />
        </div>
        <div>
          {isCartEmpty ? (
            <div className='text-white text-2xl uppercase text-center md:pt-48 sl:pt-[170px] pt-40 overflow-hidden'>
              <Lottie
                animationData={empty}
                className='flex md:top-[230px] md:left-[171px] sl:left-[171px] lg:left-[171px] mx-auto sl:top-[230px] lg:top-[230px] h-40 w-40 overflow-y-hidden'
              />
                cart is empty
              <span className='grid text-xs md:mt-5 sl:mt-5 mt-4 overflow-y-hidden'>
                You can check our products and click add to cart. Thank you!
              </span>
            </div>
          ) : (
            <div className='flex flex-col  text-white lg:h-[65vh] sl:h-560px] h-[500px]  sl:mt-0 mt-10 overflow-y-auto overflow-x-hidden'>
              {cart.map((item) => (
                <div key={item.id}>
                  <CartItem item={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {cart.length >= 1 && (
        <div className='mx-auto'>
          <div>
            <div className='flex md:ml-10 md:mt-7 sl:ml-[65px] ml-12 sl:mt-0 mt-0 text-xl text-white font-extrabold'>
              <div className='uppercase'>total:</div>
              <div className='md:ml-72 sl:ml-[224px] ml-40'>₱{total}</div>
            </div>
          </div>
          <div className='flex md:mt-0 sl:mt-0 mt-7'>
            <Button onClick={clearCart} className='uppercase hover:bg-slate-800 hover:text-white rounded-xl bg-black text-white md:ml-9 md:mt-7 md:py-4 md:px-16 sl:py-3 sl:px-10 sl:mt-5 sl:mb-5 sl:ml-16 py-3 px-6 ml-12'>
              Clear cart
            </Button>
            <Button className='flex uppercase hover:bg-slate-800 hover:text-white rounded-xl bg-black text-white md:ml-5 md:mt-7 md:py-4 md:px-16 sl:py-3 sl:px-10 sl:ml-12 sl:mt-5 sl:mb-5 py-3 px-3 ml-20'>
              <span>Checkout</span> <IoArrowForward className='ml-2 mt-[3px]' />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
