import { useState } from "react";

export default function AddProduct() {

  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    stock: "",
    description: ""
  });

  // CHANGE INPUTS
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };


  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = localStorage.getItem("user");
    const user = userData ? JSON.parse(userData) : null;


    const res = await fetch(
      "http://localhost:5000/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          role: user?.role
        },
        body: JSON.stringify(product)
      }
    );

    let data;

    try {
      data = await res.json();
    } catch (err) {
      alert("Server crashed");
      return;
    }

    alert(data.message);

    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center p-5">

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-2xl w-full max-w-xl shadow-lg"
      >

        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Add Product
        </h1>

        <div className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
          />



          <input
            type="text"
            name="category"
            placeholder="Category"
            value={product.category}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={product.image}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={product.stock}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none h-32"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg text-white font-bold"
          >
            Add Product
          </button>

        </div>
      </form>
    </div>
  );
}