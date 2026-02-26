import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Routes>

      {/* Auth Pages - NO Navbar/Footer */}
      <Route path="/" element={<Login />} />
      <Route path="/signin" element={<Signin />} />

      {/* Protected Pages - WITH Navbar/Footer */}
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

    </Routes>
  );
}