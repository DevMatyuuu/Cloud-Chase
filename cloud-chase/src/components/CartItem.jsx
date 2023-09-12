import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function CartItem({ item }) {
  const { increment, decrement, deleteFromCart, setIsOpen } = useContext(CartContext);

  const [itemQty, setItemQty] = useState(item.amount);

  useEffect(() => {
    setItemQty(item.amount);
  }, [item.amount]);

  console.log(item)

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
    const itemPrice = item.isSale ? item.price - (item.price * (20 / 100)) : item.price;
    return itemQty * itemPrice;
  };
  
  const discPrice = item.price - (item.price * (20 / 100)) 

  return (
    <div className='flex mx-auto lg:pt-10 lg:pb-5 sl:mt-12 sl:pb-5 sl:pt-10 rounded-xl justify-center lg:w-[90%] lg:gap-5 gap-8 sl:gap-5  bg-slate-700 font-poppins lg:max-w-[430px] sl:max-w-[380px] mb-10 pt-7'>
      <Link to={`/product/${item.id}`} className='w-[120px] h-[20vh] sl:w-[300px]'>
        <img src={item.image} onClick={() => setIsOpen(false)} />
      </Link>
      <div>
        <div className='lg:mb-2 sl:mb-2 mb-2 text-slate-200 uppercase text-xs font-bold'>
          {item.categories}
        </div>
        <div className='lg:mb-5 sl:mb-3 mb-5 lg:text-base sl:text-base text-xs'>{item.title}</div>
        <div className='flex lg:gap-10'>
          <div className='text-white lg:text-sm sl:text-sm text-xs font-extrabold lg:ml-1 ml-1'>₱{item.isSale ? (discPrice) : (item.price)}</div>
          {item.isSale && (
            <div className='flex text-xs text-gray-400 items-center lg:ml-12 ml-14'>
              <div className='line-through'>₱{item.price}</div>
              <div className='ml-1'>20% off</div>
            </div>
          )}
        </div>
        <div className='flex  lg:gap-3 sl:gap-3 gap-2 mt-5'>
          <div className='flex items-center rounded-lg px-2 bg-slate-800'>
            <button onClick={handleDecrement} className='text-white lg:mx-auto'>
              -
            </button>
            <input
              type='text'
              className='w-10 text-center border-none bg-transparent focus:outline-none'
              value={itemQty}
              onChange={quantityChange}
            />
            <button onClick={handleIncrement} className='text-white'>
              +
            </button>
          </div>
          <div className='text-xs text-white font-bold lg:mt-1 lg:ml-10 mt-1 ml-2'>
            Total: ₱{calculateTotal().toFixed(2)}
          </div>
        </div>
        <div className='flex lg:justify-start sl:justify-start justify-center lg:mt-3 mt:mb-0 mb-6'>
          <button
            className='text-xs lg:mt-1 sl:mt-1 mt-3 lg:mr-3 sl:mr-3 mr-0 lg:ml-36 lg:px-3 sl:px-3 px-4 py-1 ml-24 text-white bg-red-600 rounded-lg lg:whitespace-nowrap sl:whitespace-nowrap whitespace-nowrap hover:bg-red-700 duration-300'
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
