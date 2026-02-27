import { useState, useContext } from "react";
import { CartContext } from "../context/Cartcontext.jsx";
import axios from "axios";
import { auth } from "../firebase.config";
import { useNavigate } from "react-router-dom";

export default function Checkout() {

  const { cart, totalPrice } = useContext(CartContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const placeOrder = async () => {

    if (!name || !phone || !address) {
      alert("Please fill all details");
      return;
    }

    const orderData = {
      userEmail: auth.currentUser.email,
      name: name,
      phone: phone,
      shippingAddress: address,
      items: cart,
      totalAmount: totalPrice,
      orderDate: new Date()
    };

    try {
      await axios.post("http://localhost:8000/orders", orderData);
      alert("Order placed successfully!");
      navigate("/profile");   // go to profile after order
    } catch (err) {
      alert("Order failed");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-6">Checkout</h1>

      <input
        type="text"
        placeholder="Enter Name"
        className="border p-3 w-full mb-4"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Phone Number"
        className="border p-3 w-full mb-4"
        onChange={(e) => setPhone(e.target.value)}
      />

      <textarea
        placeholder="Enter Shipping Address"
        className="border p-3 w-full mb-4"
        onChange={(e) => setAddress(e.target.value)}
      />

      <h2 className="text-xl">Total: ₹{totalPrice}</h2>

      <button
        onClick={placeOrder}
        className="mt-4 bg-secondary text-white px-5 py-2 rounded"
      >
        Place Order
      </button>
    </div>
  );
}