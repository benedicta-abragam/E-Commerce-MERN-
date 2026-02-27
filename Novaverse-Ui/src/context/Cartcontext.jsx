import { createContext, useState } from "react"

export const CartContext = createContext()

export function CartProvider({ children }) {

  const [cart, setCart] = useState([])

  const addToCart = (book) => {
    const exist = cart.find((item) => item._id === book._id)

    if (exist) {
      setCart(
        cart.map((item) =>
          item._id === book._id ? { ...item, qty: item.qty + 1 } : item
        )
      )
    } else {
      setCart([...cart, { ...book, qty: 1 }])
    }
  }

  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item._id === id ? { ...item, qty: item.qty + 1 } : item
    ))
  }

  const decreaseQty = (id) => {
    setCart(cart.map(item =>
      item._id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    ))
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item._id !== id))
  }

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  )

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQty, decreaseQty, removeFromCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}