import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { CartContext } from "../context/Cartcontext.jsx"

export default function Books() {

  const { addToCart } = useContext(CartContext)

  const [books, setBooks] = useState([])
  const [search, setSearch] = useState("")
  const [genre, setGenre] = useState("")
  const [selectedBook, setSelectedBook] = useState(null)

  // Fetch books from backend
  useEffect(() => {
   axios.get(`${import.meta.env.VITE_API_URL}/books`)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err))
  }, [])

  // Filter books
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()) &&
    (genre === "" || book.genre === genre)
  )

  return (
   <div className="px-4 md:px-16 py-10 max-w-7xl mx-auto overflow-x-hidden">

      <h2 className="text-3xl font-bold mb-8">Books</h2>

      {/* Search & Filter */}
   <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-4 py-2"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded-lg px-4 py-2"
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">All Genres</option>
          <option>Love</option>
          <option>Broken</option>
          <option>Programming</option>
          <option>Poem</option>
        </select>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {filteredBooks.map((book) => (
          <div
            key={book._id}
            onClick={() => setSelectedBook(book)}
            className="bg-white rounded-xl shadow-md hover:shadow-xl p-4 cursor-pointer"
          >

            <img
              src={`/books/${book.image}`}
              alt={book.title}
             className="h-48 w-full object-contain"
            />

            <h3 className="font-semibold mt-3">{book.title}</h3>

            <p className="text-sm text-gray-500">{book.genre}</p>

            {/* ⭐ Rating Added */}
            <p className="text-yellow-500 text-sm mt-1">
              ⭐ {book.rating} / 5
            </p>

            <p className="font-bold mt-2">₹{book.price}</p>

          </div>
        ))}

      </div>

      {/* Modal Popup */}
      {selectedBook && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

          <div className="bg-white p-6 rounded-xl w-[90%] md:w-[400px] relative">

            {/* Close Button */}
            <button
              className="absolute top-2 right-4 text-xl"
              onClick={() => setSelectedBook(null)}
            >
              ×
            </button>

            <img
              src={`/books/${selectedBook.image}`}
              alt={selectedBook.title}
              className="h-56 mx-auto object-contain"
            />

            <h3 className="text-xl font-bold mt-4">
              {selectedBook.title}
            </h3>

            <p className="text-gray-500">
              {selectedBook.genre}
            </p>

            {/* ⭐ Rating Also Here */}
            <p className="text-yellow-500 mt-1">
              ⭐ {selectedBook.rating} / 5
            </p>

            <p className="font-bold text-lg mt-2">
              ₹{selectedBook.price}
            </p>

            <button
              className="mt-4 w-full bg-secondary text-white py-2 rounded"
              onClick={() => {
                addToCart(selectedBook)
                setSelectedBook(null)   // auto close popup
              }}
            >
              Add to Cart
            </button>

          </div>
        </div>
      )}

    </div>
  )
}