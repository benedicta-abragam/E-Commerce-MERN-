import { useEffect, useState } from "react"
import { auth } from "../firebase.config"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Profile() {

  const [email, setEmail] = useState("")
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email)

        // Fetch orders of that user
        axios.get(`http://localhost:8000/orders/${user.email}`)
          .then((res) => setOrders(res.data))
          .catch((err) => console.log(err))

      } else {
        navigate("/")
      }
    })

  }, [])

  const logout = async () => {
    await signOut(auth)
    navigate("/")
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">Profile</h1>

      <p className="mb-6">Logged Email: {email}</p>

      <h2 className="text-xl mb-3">Order History</h2>

      {orders.length === 0 ? (
        <p>No Orders Yet</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="border p-4 mb-4 rounded">

            <p><strong>Name:</strong> {order.name}</p>
            <p><strong>Phone:</strong> {order.phone}</p>
            <p><strong>Address:</strong> {order.shippingAddress}</p>
            <p><strong>Total:</strong> ₹{order.totalAmount}</p>

            <p className="mt-2 font-semibold">Items:</p>
            {order.items.map((item) => (
              <div key={item._id} className="ml-4">
                {item.title} × {item.qty}
              </div>
            ))}

          </div>
        ))
      )}

      <button
        onClick={logout}
        className="mt-4 bg-secondary text-white px-4 py-2 rounded">
        Logout
      </button>

    </div>
  )
}