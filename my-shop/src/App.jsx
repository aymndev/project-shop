import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/header'
import Home from "./pages/home";
import Products from "./pages/products";
import About from "./pages/about";
import Card from "./pages/card";
import Login from "./pages/login";
import Contact from "./pages/contact";
import Dashnoard from "./pages/Dashnoard";
import AddProduct from "./pages/AddProduct";
import { useState } from "react";




function App() {
  const [search, setSearch] = useState("");
  const user = JSON.parse(
    localStorage.getItem("user")
  );


  return (
    <div className='bg-gray-900 text-white min-h-screen'>

      <Header search={search} setSearch={setSearch} user={user} />
      <Routes>
        {
          user?.role == "admin" && (
            <>

              <Route path="/dashboard" element={<Dashnoard />} />
              <Route path="/addproduct" element={<AddProduct />} />
            </>

          )
        }
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products search={search} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Card />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>


  )
}

export default App
