import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth, provider } from "../firebase.config"
import logo from "../assets/logo.jpeg"

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()


  const loginUser = () => {
    setError("")

    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/home"))
      .catch(() => setError("Invalid email or password"))
  }

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, provider)
      navigate("/home")
    } catch {
      setError("Google login failed")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="backdrop-blur-md border border-white/20 
                      p-8 rounded-2xl shadow-xl w-96 text-center">

        <div className="flex flex-col items-center gap-3 mb-4">
          <img src={logo} className="w-20 rounded-full shadow-lg" />
          <h1 className="text-2xl font-bold">NovaVerse</h1>
          <p className="text-gray-400 text-sm">Login to your universe</p>
        </div>

        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 px-3 py-2 rounded border border-black 
                     bg-transparent outline-none 
                     focus:ring-2 focus:ring-secondary"
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-3 py-2 rounded border border-black 
                     bg-transparent outline-none 
                     focus:ring-2 focus:ring-secondary"
        />

        <button
          onClick={loginUser}
          className="w-full bg-secondary py-2 rounded-xl text-white 
                     hover:scale-105 transition duration-300"
        >
          Log In
        </button>

        <p className="mt-4 text-gray-400 text-sm">
          Don't have account?{" "}
          <Link to="/signin" className="text-secondary font-semibold">
            Sign Up
          </Link>
        </p>

        {/* 🔥 Google Button */}
        <button
          onClick={googleLogin}
          className="w-full mt-4 py-2 rounded-xl border border-secondary 
                     text-secondary font-semibold 
                     hover:bg-secondary hover:text-white hover:scale-105 transition duration-300">
          Continue with Google
        </button>
      </div>
    </div>
  )
}