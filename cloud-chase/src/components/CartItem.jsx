import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { CartContext } from '../context/CartContext';

function CartItem({ item }) {
  const { increment, decrement, deleteFromCart, setIsOpen } = useContext(CartContext);

  const [itemQty, setItemQty] = useState(item.amount);

  useEffect(() => {
    setItemQty(item.amount);
  }, [item.amount]);

  const quantityChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue === '' ? '' : inputValue.replace(/\D/g, '');
    const limitedValue = numericValue === '' ? '' : Math.max(parseInt(numericValue), 1);
    setItemQty(limitedValue);
  };

  const handleDecrement = () => {
    const decrementValue = 1;
    const newDecQty = itemQty - decrementValue;
    if (newDecQty >= 1) {
      setItemQty(newDecQty);
      decrement(item.id);
    }
  };

  const handleIncrement = () => {
    const incrementValue = 1;
    const newIncQty = itemQty + incrementValue;
    setItemQty(newIncQty);
    increment(item.id);
  };

  const calculateTotal = () => {
    const itemPrice = item.attributes.isSale ? item.attributes.price - (item.attributes.price * (20 / 100)) : item.attributes.price;
    return itemQty * itemPrice;
  };
  
  const discPrice = item.attributes.price - (item.attributes.price * (20 / 100)) 

  return (
    <div className='flex md:mt-10 md:ml-5 md:pt-8 md:pb-5 sl:mt-12 sl:pb-5 sl:pt-10 sl:ml-11 rounded-xl md:pl-12 sl:gap-5 sl:pl-14 bg-slate-700 font-poppins md:max-w-[430px] sl:max-w-[380px] mb-10 pt-7 pl-8'>
      <Link to={`/product/${item.id}`} className='w-[120px] h-[120px] sl:w-[300px]'>
        <img src={`https://cloud-chase-be-production-e564.up.railway.app${item.attributes.image.data.attributes.url}`} onClick={() => setIsOpen(false)} />
      </Link>
      <div className='md:ml-5 sl:ml-5 ml-4'>
        <div className='md:mb-2 sl:mb-2 mb-2 text-yellow-500 uppercase text-xs font-bold'>
          {item.attributes.categories.data[0].attributes.title}
        </div>
        <div className='md:mb-5 sl:mb-3 mb-5 md:text-md sl:text-md text-xs'>{item.attributes.title}</div>
        <div className='flex md:gap-10'>
          <div className='text-yellow-500 md:text-sm sl:text-sm text-xs font-extrabold md:ml-1 ml-1'>₱{item.attributes.isSale ? (discPrice) : (item.attributes.price)}</div>
          {item.attributes.isSale && (
            <div className='flex text-xs text-gray-400 items-center md:ml-12 ml-14'>
              <div className='line-through'>₱{item.attributes.price}</div>
              <div className='ml-1'>20% off</div>
            </div>
          )}
        </div>
        <div className='flex  md:gap-3 sl:gap-3 gap-2 mt-5'>
          <div className='flex items-center rounded-lg px-2 bg-slate-800'>
            <button onClick={handleDecrement} className='text-yellow-500 md:mx-auto'>
              -
            </button>
            <input
              type='text'
              className='w-10 text-center border-none bg-transparent focus:outline-none'
              value={itemQty}
              onChange={quantityChange}
            />
            <button onClick={handleIncrement} className='text-yellow-500'>
              +
            </button>
          </div>
          <div className='text-xs text-yellow-500 font-bold md:mt-1 md:ml-10 mt-1 ml-2'>
            Total: ₱{calculateTotal().toFixed(2)}
          </div>
        </div>
        <div className='flex md:justify-start sl:justify-start justify-center md:mt-3 mt:mb-0 mb-6'>
          <button
            className='text-xs md:mt-1 sl:mt-1 mt-3 md:mr-3 sl:mr-3 mr-0 md:ml-36 md:px-3 sl:px-3 px-4 py-1 ml-24 text-white bg-red-600 rounded-lg md:whitespace-nowrap sl:whitespace-nowrap whitespace-nowrap hover:bg-red-700 duration-300'
            onClick={() => deleteFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
