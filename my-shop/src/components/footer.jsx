


import { Link } from "react-router-dom";

export default function footer() {
    return (
        <div className="bg-gray-900 text-white pl-[12rem] p-10 grid grid-cols-3 gap-5 border-t-1">

            <div>
                <h2 className="font-bold mb-2">My Shop</h2>
                <p>Best products online</p>
            </div>

            <div className="">
                <h3 className="font-bold mb-2 ">Links</h3>
                <ul>
                    <li className=" hover:underline" ><Link to="/">Home</Link></li>
                    <li className=" hover:underline"><Link to="/products">Shop</Link></li>
                    <li className=" hover:underline"><Link to="/Cart">Cart</Link></li>
               
                </ul>
            </div>

            <div className="border-l-1 p-5">
                <h3 className="font-bold mb-2">Contact</h3>
                <p>Email: myshop@mail.com</p>
            </div>

        </div>
    );
}

