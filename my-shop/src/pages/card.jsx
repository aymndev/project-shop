import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  return (
    <div className=" min-h-screen flex flex-col" >
      <h1 className="flex items-center pt-10 justify-center font-bold text-4xl">My cart</h1>
      <div className="grid grid-cols-3   p-5 gap-9 pt-[2rem]">
        {cart.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="relative h-[28rem] bg-gray-600 overflow-hidden rounded shadow bg-center bg-cover"
            style={{ backgroundImage: `url(${item.images?.[0]})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>



            {/*<img className="h-[29rem] w-auto object-cover " src={item.images?.[0]} />*/}
            <div className=" absolute bottom-0 p-4 text-white z-10">



              <h3> {item.title}</h3>
              <p className="text-green-400">{item.price}$</p>
              <button
                className="bg-orange-400 py-3 px-5 rounded-lg text-white"
                onClick={() => removeFromCart(item.id)} >Dellet</button>
            </div>


          </div>

        ))}

      </div>
    </div>
  )
}
