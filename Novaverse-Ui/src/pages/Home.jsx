import { useNavigate } from "react-router-dom"
import booklogo from "../assets/book-img.png"
import logo from "../assets/logo.jpeg"

export default function Home() {
  const navigate = useNavigate()
  const BookExplore= ()=>{
      navigate("/books")
  }
 
  return (
    <section className="bg-primary min-h-[85vh] flex items-center px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-12 w-full items-center">

        {/* LEFT */}
        <div className="space-y-6">

          {/* Big Logo + Heading */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

            {/* BIG LOGO */}
            <img
              src={logo}
              alt="NovaVerse"
              className="w-32 md:w-44 rounded-full shadow-lg"
            />

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight text-center md:text-left">
              Explore Your Universe of Books
            </h1>
          </div>

          {/* Quote */}
          <p className="italic text-gray-700 text-center md:text-left">
            “Every page opens a new world.”
          </p>

          {/* Description */}
          <p className="text-gray-600 text-lg text-center md:text-left">
            Love, broken hearts, poetry, and programming — all in one place.
            Discover stories that inspire, heal, and transform your life.
          </p>

          {/* Button */}
          <div className="text-center md:text-left">
            <button onClick={BookExplore} className="bg-secondary text-white px-7 py-3 rounded-xl shadow-md hover:scale-105 transition duration-300">
              Explore Books
            </button>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:flex justify-center md:justify-end">
          <img
            src={booklogo}
            alt="books"
            className="w-[280px] md:w-[380px] drop-shadow-xl"
          />
        </div>

      </div>
    </section>
  )
}