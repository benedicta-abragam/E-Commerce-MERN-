import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
      
      <Link to="/" className="flex items-center gap-2">
        <h1 className="text-xl font-semibold text-secondary">NovaVerse</h1>
      </Link>

      <div className=" flex gap-4 md:gap-20 text-gray-700 text-base font-medium">
        <Link to="/home" className="hover:text-secondary">Home</Link>
        <Link to="/books" className="hover:text-secondary">Books</Link>
        <Link to="/cart" className="hover:text-secondary">Cart</Link>
        <Link to="/profile" className="hover:text-secondary">Profile</Link>
      </div>
    </nav>
  );
}