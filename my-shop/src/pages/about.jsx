import about from "../assets/about.jpg";
import Footer from "../components/footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">

  
      <div
        className="relative w-full h-[90vh] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${about})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-4xl text-center px-6">

          <h1 className="text-5xl md:text-6xl font-bold text-orange-500 mb-6">
            Online Store
          </h1>

          <p className="text-white text-lg md:text-xl leading-relaxed">
            Welcome to My Shop, your simple and modern online store designed to
            give you a smooth and enjoyable shopping experience.
          </p>

        </div>
      </div>


      <div className="max-w-5xl mx-auto py-20 px-6 text-center space-y-6">

        <h2 className="text-3xl font-bold text-gray-800">
          About Us
        </h2>

        <p className="text-gray-600 leading-relaxed text-justify md:text-center">
          We are a digital e-commerce platform built with modern web technologies
          like React and Tailwind CSS. Our goal is to make online shopping fast,
          easy, and accessible for everyone.

          At My Shop, you can browse a wide variety of products, search for what
          you need in seconds, and add items to your cart with ease. We focus on
          simplicity, performance, and user experience.

          Our mission is to build a clean and efficient shopping platform where
          users can find what they need without complexity.

          This project is also a learning journey, showcasing real-world frontend
          development using APIs and modern UI design.
        </p>

        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
          Learn More
        </button>

      </div>

      <Footer />
    </div>
  );
}