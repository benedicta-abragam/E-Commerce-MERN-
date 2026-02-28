import { Link } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <nav className="px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/home">
          <h1 className="text-xl font-semibold text-secondary">
            NovaVerse
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-20 text-gray-700 text-base font-medium">
          <li><Link to="/home" className="hover:text-secondary">Home</Link></li>
          <li><Link to="/books" className="hover:text-secondary">Books</Link></li>
          <li><Link to="/cart" className="hover:text-secondary">Cart</Link></li>
          <li><Link to="/profile" className="hover:text-secondary">Profile</Link></li>
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>

      </nav>

      {/* Mobile Slide Menu */}
    <div className={`fixed top-0 right-0 h-full w-60 bg-white shadow-lg transform transition-transform duration-300 md:hidden
             ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <ul className="flex flex-col gap-6 p-8 text-gray-700 font-medium">

          <li>
            <Link to="/home"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 rounded-lg hover:bg-secondary hover:text-white transition-all duration-300">
              Home </Link>
          </li>

          <li>
            <Link to="/books"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 rounded-lg hover:bg-secondary hover:text-white transition-all duration-300">
              Books </Link>
          </li>

          <li> <Link
              to="/cart"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 rounded-lg hover:bg-secondary hover:text-white transition-all duration-300">
              Cart </Link>
          </li>

          <li> <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 rounded-lg hover:bg-secondary hover:text-white transition-all duration-300">
              Profile </Link>
          </li>

        </ul>
      </div>

    </header>
  )
}