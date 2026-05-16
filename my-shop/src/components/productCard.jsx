import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product,
  products,
  setProducts
}) {
  const { addToCart } = useContext(CartContext);

  const user = JSON.parse(localStorage.getItem("user"));

  const deleteElement = async (id) => {

    await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
      headers: {
        role: user.role
      }
    });
    setProducts(products.filter((p) => p.id !== id));
    alert("Product deleted");

  }

  return (
    <div
      className="relative bg-gray-800  h-[21rem] w-[23rem] rounded-xl bg-center bg-cover overflow-hidden  "
      style={{
        backgroundImage: `url(${product.image || "https://via.placeholder.com/300"})`
      }}
    >



      <div className="absolute inset-0  bg-black/40"></div>
      <div className="relative z-10  text-white  bottom-[-14rem]  left-9" >



        <h3 className="text-sm font-bold">{product.name}</h3>


        <p className="text-green-400">{product.price} $</p>
        <div className=" flex gap-5 justify">
          <button
            onClick={() => addToCart(product)}
            className=" bg-orange-500 px-4 py-2 rounded"
          >
            Add to Cart
          </button>
          {
            user?.role === "admin" && (
              <button
                onClick={() => deleteElement(product.id)}

                className="bg-red-600 rounded px-3 py-2 hover:bg-red-700">
                Delete
              </button>
            )
          }

        </div>



      </div>
    </div>
  );
}