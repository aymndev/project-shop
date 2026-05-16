import { TiShoppingCart } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";
import shop from "../assets/shop.jpg"
import Man from "../assets/man.jpg"
import wo from "../assets/wo.jpg"
import man2 from "../assets/man2.jpg"
import Footer from "../components/footer"
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className='flex  min-h-screen flex-col'>

      <div className='bg-gradient-to-r flex min-h-[70vh] flex-col gap-9  bg-orange-400 rounded-b-xl flex-col'>
        <div className='relative flex flex-col lg:flex-row items-center justify-between px-90 py-8 gap-20'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold text-5xl'>Sophistication Finds </h1>
            <h1 className='font-bold text-5xl '>It's Pinnacle in Simlicity</h1>

          </div>


          <div className=' flex pl-[13rem] pt-[2rem]'>
            <div className='flex  flex-col '>


              <div>
                <img src={shop} alt="shop" className=" w-full mix-blend-multiply opacity-90" />
              </div>
              <div className='flex flex-row gap-6 justify-center pt-5'>
                <button
                  onClick={() => navigate("/products")}
                  className='bg-orange-500 p-3 rounded-[5px] hover:underline'>
                  <span className='flex flex-row'>Shop now <FaArrowRight className='h-3 mt-2' /></span>
                </button>
                <button

                  className='bg-gray-100 rounded-[5px] p-3'>
                  <span className='flex flex-row text-gray-400'>2026 Preview</span>
                </button>
              </div>
            </div>
          </div>






        </div>

      </div>

      <div className=' flex gap-[9rem] ml-[5rem] mt-[10rem] mb-[10rem]'>
        <div className='flex bg-gray-600 ml-5 pl-2 w-[24rem] h-[15rem] justify-between rounded-xl  overflow-hidden'>

          <div className=' flex flex-row items-center  px-4'>
            <h1 className='font-semibold text-center '>Where luxury becomes style </h1>



          </div>
          <div className='relative'>
            <img src={wo} className='h-full w-[200px] ml-auto object-cover   ' />
            <button
            onClick={() => navigate("/products")}



              className=" flex items-center gap-2 absolute bottom-3 left-3 bg-orange-500  hover:underline text-white px-4 py-2 rounded-lg hover:underline">
              <span> Shop Now </span><TiShoppingCart className="text-2xl  " />
            </button>

          </div>


        </div>
        <div className=' flex bg-gray-600 ml-5 pl-2 w-[24rem] h-[15rem] justify-between rounded-xl  overflow-hidden'>
          <div className=' flex flex-row items-center  px-4'>
            <h1 className='font-semibold text-center '>Where style meets elegance </h1>



          </div>
          <div className='relative'>
            <img src={man2} className='h-full w-[200px] ml-auto object-cover   ' />
            <button 
            onClick={() => navigate("/products")}
            className=" flex items-center gap-2  hover:underline absolute bottom-3 left-3 bg-orange-500 text-white px-4 py-2 rounded-lg">
              <span> Shop Now </span><TiShoppingCart className="text-2xl  " />
            </button>

          </div>



        </div>
        <div className='flex bg-gray-600 ml-5 pl-2 w-[24rem] h-[15rem] justify-between rounded-xl  overflow-hidden'>
          <div className=' flex flex-row items-center  px-4'>
            <h1 className='font-semibold text-center '> Where dreams meet couture </h1>



          </div>
          <div className='relative'>
            <img src={Man} className='h-full w-[200px] ml-auto object-cover   ' />
            <button 
            onClick={() => navigate("/products")}
            className=" flex items-center gap-2 absolute hover:underline bottom-3 left-3 bg-orange-500 text-white px-4 py-2 rounded-lg">
              <span> Shop Now </span><TiShoppingCart className="text-2xl  " />
            </button>

          </div>

        </div>



      </div>

      <Footer />





    </div>


  )
}
