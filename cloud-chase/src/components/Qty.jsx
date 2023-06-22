import React, { useState } from 'react';

function Qty({ item }) {
  const [itemQty, setItemQty] = useState(1);

  const handleDecrement = () => {
    setItemQty(itemQty - 1);
  };

  const handleIncrement = () => {
    setItemQty(itemQty + 1);
  };

  const totalPrice = item.attributes.price * itemQty;

  return (
    <div>
      <div>
        
      </div>
      <p>Total Price: {totalPrice}</p>
    </div>
  );
}

export default Qty;