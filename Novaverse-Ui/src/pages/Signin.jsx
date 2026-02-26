import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth, provider } from "../firebase.config"
import logo from "../assets/logo.jpeg"
import { onAuthStateChanged } from "firebase/auth"


export default function Signin() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  // useEffect
  useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) navigate("/home")
  })
}, [])

  const signup = () => {
    const emailRegex = /^[a-zA-Z0-9.]+@gmail\.com$/
    const passRegex = /^.{6,}$/

    if (!emailRegex.test(email)) {
      setError("Enter valid Gmail address")
      return
    }

    if (!passRegex.test(password)) {
      setError("Password must be at least 6 characters")
      return
    }

    setError("")

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/"))
      .catch(() => setError("Unable to create account"))
  }

  const googleSignup = async () => {
    try {
      await signInWithPopup(auth, provider)
      navigate("/home")
    } catch {
      setError("Google signup failed")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="backdrop-blur-md border border-white/20 
                      p-8 rounded-2xl shadow-xl w-96 text-center">

        <div className="flex flex-col items-center gap-3 mb-4">
          <img src={logo} className="w-20 rounded-full shadow-lg" />
          <h1 className="text-2xl font-bold">NovaVerse</h1>
          <p className="text-gray-400 text-sm">Create your universe</p>
        </div>

        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

        <input
          type="email"
          placeholder="Enter Gmail"
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
          onClick={signup}
          className="w-full bg-secondary py-2 rounded-xl text-white 
                     hover:scale-105 transition duration-300"
        >
          Sign Up
        </button>

        <p className="mt-4 text-gray-400 text-sm">
          Already have account?{" "}
          <Link to="/" className="font-semibold text-secondary">
            Login
          </Link>
        </p>

        {/* 🔥 Google */}
        <button
          onClick={googleSignup}
          className="w-full mt-4 py-2 rounded-xl border border-secondary 
                     text-secondary font-semibold 
                     hover:bg-secondary hover:text-white hover:scale-105 transition duration-300">
          Sign up with Google
        </button>

      </div>
    </div>
  )
}