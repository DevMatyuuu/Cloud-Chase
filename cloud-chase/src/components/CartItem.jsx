import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { CartContext } from '../context/CartContext';

function CartItem({ item }) {
  // Access the increment and decrement functions from the CartContext
  const { increment, decrement, deleteFromCart, calculateTotal } = useContext(CartContext);

  const [itemQty, setItemQty] = useState(item.amount);

  const quantityChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, '');
    const limitedValue = Math.max(parseInt(numericValue), 1);
    setItemQty(limitedValue);
  }
  const handleDecrement = () => {
    const decrementValue = 1;
    const newDecQty = parseInt(itemQty) - decrementValue;
    if (newDecQty >= 0) {
      decrement(item.id); // Call the decrement function from the CartContext
    }
  };

  const handleIncrement = () => {
    const incrementValue = 1;
    const newIncQty = parseInt(itemQty) + incrementValue;
    if (newIncQty > 0) {
    increment(item.id); // Call the increment function from the CartContext
  };
}

const discountedPrice = item.attributes.price - (item.attributes.price * (20 / 100))

  return (
    <div className='flex md:mt-10 md:ml-5 md:pt-8 md:pb-5 sl:mt-12 sl:pb-5 sl:pt-10 sl:ml-11 rounded-xl md:pl-12 sl:gap-5 sl:pl-14 bg-slate-700 font-poppins md:max-w-[430px] sl:max-w-[380px]'>
      <Link to={`/product/${item.id}`} className='w-[100px] h-[120px] sl:w-[300px]'>
        <img src={`https://cloud-chase-be-production-e564.up.railway.app${item.attributes.image.data.attributes.url}`} />
      </Link>
      <div className='md:ml-5'>
        <div className='md:mb-2 sl:mb-2 text-yellow-500 uppercase text-xs font-bold'>
          {item.attributes.categories.data[0].attributes.title}
        </div>
        <div className='md:mb-5 sl:mb-3'>{item.attributes.title}</div>
        <div className='flex md:gap-10'>
          <div className='text-yellow-500'>
            {item.attributes.isSale ? (<div>₱{discountedPrice}<span className='grid text-slate-300'>₱{item.attributes.price}</span></div>) : (<div>₱{item.attributes.price}</div>) }
          </div>
          
          <div className='md:mr-20 sl:ml-5'>
            <div className='flex bg-slate-800 rounded-full w-[70px]'>
              <button onClick={handleDecrement} className='md:pl-3 w-[27px]'>
                -
              </button>
              <input
                type='text'
                value={itemQty * item.amount}
                onChange={quantityChange}
                className='w-[30px] text-center bg-slate-800 text-xs'
              ></input>
              <button onClick={handleIncrement} className='md:pr-3 w-[35px]'>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex md:pr-5  sl:w-80'>
        <IoClose onClick={() => deleteFromCart(item.id)} className='hover:scale-110 cursor-pointer text-red-400 h-[23px] md:w-[20px] sl:w-[17px]' />
      </div>
    </div>
  );
}

export default CartItem