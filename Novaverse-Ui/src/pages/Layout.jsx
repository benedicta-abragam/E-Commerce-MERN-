import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Layout() {
  return (
    <>
      <Navbar />

      {/* This padding fixes hidden content */}
      <main className="pt-14 min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}