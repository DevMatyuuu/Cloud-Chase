import React, {createContext, useEffect, useState} from 'react';

export const CartContext = createContext()

const CartProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [itemsAmount, setItemsAmount] = useState(0)
  const [amount, setAmount] = useState(0)
  const [total, setTotal] = useState(0)

//whole cart quantity of item
  useEffect(() => {
    const amount = cart.reduce((a, c) => {
      return (a + c.amount)
    }, 0)

    setItemsAmount(amount)
  }, [cart])

  //add to cart
  const addToCart = (item, id) => {
    const itemID = parseInt(id)
    const newItem = {...item[0], amount: 1}
    setCart([...cart, newItem])
    const cartItem = cart.find(item => {
      return item.id === itemID
    })

      if (cartItem) {
        const newCart = cart.map(item =>{
          if (item.id === itemID) {
            setAmount(cartItem.amount + 1)
            return {...item, amount: cartItem.amount + 1}
          } else {
            return item
          }
        })
        setCart(newCart)
      } else {
        setCart([...cart, newItem])
      }
  }

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
        const origPrice = c.attributes.price
        const discount = 20
        const discountPrice = origPrice - (origPrice * (discount / 100))
        return (
          c.attributes.isSale ? 
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
      
        const itemTotalPrice = item.amount * (item.attributes.isSale ? discountedPrice : origPrice);
        total += itemTotalPrice;
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