import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <nav className="px-8 py-4 flex justify-between items-center">
        
        <Link to="/home" className="flex items-center gap-2">
          <h1 className="text-xl font-semibold text-secondary">
            NovaVerse
          </h1>
        </Link>

        <ul className="flex gap-4 md:gap-20 text-gray-700 text-base font-medium">
          <li><Link to="/home" className="hover:text-secondary">Home</Link></li>
          <li><Link to="/books" className="hover:text-secondary">Books</Link></li>
          <li><Link to="/cart" className="hover:text-secondary">Cart</Link></li>
          <li><Link to="/profile" className="hover:text-secondary">Profile</Link></li>
        </ul>

      </nav>
    </header>
  )
}