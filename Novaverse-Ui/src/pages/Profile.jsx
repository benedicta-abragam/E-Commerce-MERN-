import { useEffect, useState } from "react"
import { auth } from "../firebase.config"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"

export default function Profile() {

  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email)
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
    <div className="p-10 text-center">
      <h1 className="text-2xl mb-4">Profile</h1>
      <p>Logged Email: {email}</p>

      <button onClick={logout}
        className="mt-4 bg-secondary text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  )
}