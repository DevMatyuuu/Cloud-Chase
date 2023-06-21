import React, { useState } from 'react';

function Qty({ item }) {
  const [itemQty, setItemQty] = useState(1);

  const handleDecrement = () => {
    setItemQty(itemQty - 1);
  };

  const handleIncrement = () => {
    setItemQty(itemQty + 1);
  };

  return (
    <div>
      <div>
        <div className='flex bg-slate-800 rounded-full w-[65px]'>
          <button onClick={handleDecrement} className='w-[27px]'>
            -
          </button>
          <div className='w-[15px]'>{itemQty}</div>
          <button onClick={handleIncrement} className='w-[20px]'>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Qty;
  
