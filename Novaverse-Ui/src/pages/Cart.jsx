import { useContext } from "react"
import { CartContext } from "../context/Cartcontext.jsx"
import { useNavigate } from "react-router-dom"

export default function Cart() {

  const { cart, increaseQty, decreaseQty, removeFromCart, totalPrice } = useContext(CartContext)
  const navigate = useNavigate()

  return (
    <div className="p-10">

      <h1 className="text-2xl mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item._id} className="flex justify-between items-center border-b py-4">

              <div>
                <h3>{item.title}</h3>
                <p>₹{item.price}</p>

                <div className="flex items-center gap-3 mt-2">
                  <button onClick={() => decreaseQty(item._id)} className="px-2 bg-gray-200">-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item._id)} className="px-2 bg-gray-200">+</button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-500"
              >
                Remove
              </button>

            </div>
          ))}

          <h2 className="text-xl mt-6">Total: ₹{totalPrice}</h2>

          <button
            onClick={() => navigate("/checkout")}
            className="mt-4 bg-secondary text-white px-5 py-2 rounded"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  )
}