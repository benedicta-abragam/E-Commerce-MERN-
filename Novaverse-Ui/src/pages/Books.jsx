import { useState, useEffect } from "react";
import axios from "axios";



export default function Book() {

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");
    const [genre, setGenre] = useState("");
    const [selectedBook, setSelectedBook] = useState(null);
    const [cart, setCart] = useState([])

    // Fetch books
    useEffect(() => {
        axios.get("http://localhost:8000/books")
            .then((res) => {
                setBooks(res.data);
            })
            .catch((err) => {
                console.log("Error fetching books:", err);
            });
    }, []);

    // Filter 
    const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) &&
        (genre === "" || book.genre === genre)
    );
    //  Add to Cart
    const addToCart = (book) => {
        // check if already in cart
        const exist = cart.find((item) => item._id === book._id);

        if (exist) {
            // increase quantity
            exist.qty = exist.qty + 1;
            setCart([...cart]);
        } else {
            // add new item
            setCart([...cart, { ...book, qty: 1 }]);
        }
    };

    return (
        <div className="px-6 md:px-16 py-10">

            <h2 className="text-3xl font-bold mb-8">Books</h2>

            {/* Filters */}
            <div className="flex flex-row gap-4 mb-8">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded-lg w-50 md:w-60 px-4 py-2"
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    className="border w-40 rounded-lg px-4 py-2"
                    onChange={(e) => setGenre(e.target.value)}
                >
                    <option value="">All Genres</option>
                    <option>Love</option>
                    <option>Broken</option>
                    <option>Programming</option>
                    <option>Poem</option>
                </select>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                {filtered.map((book) => (

                    <div
                        key={book._id}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col"
                    >

                        <div className="h-56 flex items-center justify-center bg-gray-50 rounded-lg">
                            <img
                                src={`/books/${book.image}`}
                                className="max-h-full object-contain"
                            />
                        </div>

                        <h3 className="font-semibold mt-4 text-gray-800">
                            {book.title}
                        </h3>

                        <p className="text-sm text-gray-500">
                            {book.genre}
                        </p>

                        <p className="text-yellow-500 text-sm mt-1">
                            ⭐ {book.rating} / 5
                        </p>

                        <p className="font-bold text-secondary mt-2">
                            ₹{book.price}
                        </p>

                        <button className="mt-3 bg-primary text-gray-800 py-2 rounded-lg hover:bg-secondary hover:text-white transition"
                         onClick={() => setSelectedBook(book)}>
                            Add to Cart
                        </button>

                    </div>
                ))}

            </div>

            {/* Modal */}
            {selectedBook && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

                    <div className="bg-white rounded-2xl p-6 w-[90%] md:w-[500px] relative">

                        <button
                            className="absolute top-3 right-4 text-2xl"
                            onClick={() => setSelectedBook(null)}
                        >
                            x
                        </button>

                        <div className="flex justify-center">
                            <img
                                src={`/books/${selectedBook.image}`}
                                alt={selectedBook.title}
                                className="h-60 object-contain"
                            />
                        </div>

                        <h3 className="text-xl font-bold mt-4">
                            {selectedBook.title}
                        </h3>

                        <p className="text-gray-500">
                            {selectedBook.genre}
                        </p>

                        <p className="text-yellow-500 mt-1">
                            ⭐ {selectedBook.rating} / 5
                        </p>

                        <p className="font-bold text-lg mt-2">
                            ₹{selectedBook.price}
                        </p>

                        <button
                            className="mt-4 w-full bg-primary text-black py-2 rounded-lg hover:bg-secondary transition"
                           onClick={() => addToCart(selectedBook)}>
                            Add to Cart
                        </button>

                    </div>
                </div>
            )}

        </div>
    );
}