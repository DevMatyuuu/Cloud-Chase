import React, {createContext, useEffect, useState} from 'react';

export const CartContext = createContext()

const CartProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [itemsAmount, setItemsAmount] = useState(0)
  const [amount, setAmount] = useState(0)
  const [total, setTotal] = useState(0)
  
//retreive data of the user
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

//whole cart quantity of item
  useEffect(() => {
    const amount = cart.reduce((a, c) => {
      return (a + c.amount)
    }, 0)

    setItemsAmount(amount)
  }, [cart])

  //add to cart
  const addToCart = (item) => {
    const itemID = item.id;
  
    const existingItem = cart.find((cartItem) => cartItem.id === itemID);
  
    if (existingItem) {
      // If the item already exists in the cart, update its quantity
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === itemID) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
  
      setCart(updatedCart);
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      const newItem = { ...item, amount: 1 };
      setCart([...cart, newItem]);
    }
  };
  

//delete item from cart
    const deleteFromCart = (id) => {
      const newCart = cart.filter(item => {
        return item.id !== id
      })
      setCart(newCart)
    } 
  
//cart items total price
    useEffect(() => {
      const total = cart.reduce((a, c) => {
        const origPrice = c.price
        const discount = 20
        const discountPrice = origPrice - (origPrice * (discount / 100))
        return (
          c.isSale ? 
          a + discountPrice * c.amount : a + origPrice * c.amount
          )
      }, 0)
      setTotal(total)
    }, [cart])

    //cart increment quantity
    const increment = (itemId) => {
      const updatedCart = cart.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            amount: item.amount + 1
          };
        }
        return item;
      });
    
      setCart(updatedCart);
      updateTotalPrice(); // Update the total price
    };
    
    //cart decrement quantity
    const decrement = (itemId) => {
      const updatedCart = cart.map((item) => {
        if (item.id === itemId && item.amount > 1) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      setCart(updatedCart);
    };

    const calculateTotal = () => {
      let total = 0;
    
      cart.forEach((item) => {
        const itemTotalPrice = (item.isSale ? discountedPrice : origPrice);
        total += itemTotalPrice || 0; 
      });
    
      return total;
    };

    const clearCart = () => {
      setCart([]);
    }
    


  return(
  <CartContext.Provider value={{isOpen, setIsOpen, addToCart, cart, deleteFromCart, itemsAmount, total, increment, decrement, calculateTotal, clearCart}}>
    {children}
  </CartContext.Provider>
  )
}
export default CartProvider