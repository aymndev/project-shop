
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";






function Header({ search, setSearch ,user}) {








    return (
        <div className="flex flex-row   p-5">
            <div className="flex  flex-row  w-full">


                <div className="flex flex-row pt-3 px-[3rem]">
                    <h1 className="text-2xl font-bold text-orange-400">My Shop</h1>

                </div>
                <div className="flex flex-row px-[12rem]  ">

                    <nav className="mt-1">
                        <ul className="flex flex-row  items-center gap-5">
                            <div className="flex flex-row  gap-[2rem]">
                                <li className="">
                                    <Link to="/" className=" relative hover:underline hover:decoration-orange-500" >
                                        Home
                                        <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/products" className=" relative hover:underline hover:decoration-orange-500">Products</Link>
                                    <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                                </li>

                                <li>
                                    <Link to="/about" className=" relative hover:underline hover:decoration-orange-500">About</Link>
                                    <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                                </li>

                                <li>
                                    <Link to="/contact" className=" relative hover:underline hover:decoration-orange-500">Contact</Link>
                                    <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                                </li>
                                {user?.role == "admin" && (
                                    <>
                                        <li>
                                            <Link to="/addproduct" className=" relative hover:underline hover:decoration-orange-500">Addproducts</Link>
                                            <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                                        </li>
                                        <li>
                                            <Link to="/dashnoard" className=" relative hover:underline hover:decoration-orange-500">Dashnoard</Link>
                                            <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                                        </li>

                                    </>
                                )}



                            </div>
                            <div className=" flex flex-row">
                                <input
                                    type="text"
                                    className=" bg-white text-black text-lg p-2 rounded-l-lg outline-none "
                                    placeholder="Search..."
                                    value={search}

                                    onChange={(e) => setSearch(e.target.value)}



                                />
                                <button

                                    className="bg-white p-3 rounded-r-lg"><IoSearch className="font-bold text-black" /></button>

                            </div>
                            <div className="flex flex-row gap-5">
                                <li>
                                    <Link to="/cart" className=" relative hover:underline hover:decoration-orange-500">Cart</Link>
                                    <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                                </li>

                                <li>
                                    <Link to="/login" className=" relative hover:underline hover:decoration-orange-500">Login</Link>
                                    <span className="absolute left-0 -bottom-2 b-5 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                                </li>


                            </div>






                        </ul>
                    </nav>
                </div>
            </div>


        </div>


    )
}

export default Header