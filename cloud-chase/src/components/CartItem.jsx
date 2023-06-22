import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'
import Qty from './Qty'
import { CartContext } from '../context/CartContext'



function CartItem({item}) {

//delete cart item
const {deleteFromCart} = useContext(CartContext)


//20% sale and orig price 
const origPrice = item.attributes.price
const discPercentage = 20
const discountedPrice = origPrice - (origPrice * (discPercentage / 100))

//orig price and quantity
const [itemQty, setItemQty] = useState(1);

const quantityChange = (e) => {
  setItemQty(e.target.value);
};


const handleDecrement = () => {
  setItemQty(itemQty - 1);
};

const handleIncrement = () => {
  setItemQty(itemQty + 1);
};

//Normal price items
const totalPrice = origPrice * itemQty;
//Discounted price items
const totalDiscPrice = discountedPrice * itemQty;
  


  return (
    <div className='flex md:mt-10 md:ml-5 md:pt-8 md:pb-5 rounded-xl md:pl-12 bg-slate-700 font-poppins md:max-w-[430px]'>
        <Link to={`/product/${item.id}`} className='w-[100px] h-[120px]'>
            <img src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}/>
        </Link>
    <div className='md:ml-5'>
        <div className='md:mb-2 text-yellow-500 uppercase text-xs font-bold'>
            {item.attributes.categories.data[0].attributes.title}
        </div>
        <div className='md:mb-5'>
            {item.attributes.title}
        </div>
    <div className='flex md:gap-10'>
        <div className='text-yellow-500'>
            {item.attributes.isSale ? (
                     <div>₱{totalDiscPrice * item.amount}<span className='grid absolute md:mt-3 text-slate-300'>Original price: {origPrice}</span></div>
                     ) : (<div>₱{totalPrice * item.amount}</div>)}
        </div>
        <div className='md:mr-20'>
            <div className='flex bg-slate-800 rounded-full w-[70px]'>
            <button onClick={handleDecrement} className='md:pl-3 w-[27px]'>
                -
            </button>
            <input type='text' value={itemQty * item.amount} onChange={quantityChange} className='w-[30px] text-center bg-slate-800 text-xs'></input>
            <button onClick={handleIncrement} className='md:pr-3 w-[35px]'>
                +
            </button>
            </div>
        </div>
        
    </div>
    </div>
     <div className='fixed md:ml-[330px]'>
            <IoClose onClick={() => deleteFromCart(item.id)} className='hover:scale-110 cursor-pointer text-red-400 h-[23px] w-[20px]'/>
    </div>
    </div>
    
  )
}

export default CartItem
