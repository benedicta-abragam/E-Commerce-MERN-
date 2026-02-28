export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-16 py-12">
      
      {/* Top Section */}
     <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">NovaVerse</h2>
          <p className="text-gray-400 text-sm leading-relaxed  md:text-base">
            Your universe of books. Discover love, poetry, emotions and
            programming knowledge in one place.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-400 text-sm md:text-base">
            <li className="hover:text-white cursor-pointer transition">Love</li>
            <li className="hover:text-white cursor-pointer transition">Broken</li>
            <li className="hover:text-white cursor-pointer transition">Programming</li>
            <li className="hover:text-white cursor-pointer transition">Poem</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm  md:text-base">
            <li className="hover:text-white cursor-pointer transition">Home</li>
            <li className="hover:text-white cursor-pointer transition">Books</li>
            <li className="hover:text-white cursor-pointer transition">Cart</li>
            <li className="hover:text-white cursor-pointer transition">Login</li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4 text-center md:text-left">
        <p>© 2026 NovaVerse. All rights reserved.</p>
        <p>Made with  for book lovers</p>
      </div>

    </footer>
  )
}