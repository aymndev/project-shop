import Footer from "../components/footer";
import ContactImg from "../assets/contact.jpg";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">

      <div
        className="relative w-full h-[60vh] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${ContactImg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-bold text-white">Contact Us</h1>
          <p className="text-gray-200 mt-3 text-lg">
            We’re here to help you anytime
          </p>
        </div>
      </div>


      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">

 
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Get in Touch
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Have a question or facing a problem? We’re here to help.
            Don’t hesitate to contact us and we’ll respond as soon as possible.
            Your feedback is important to us.
          </p>

          <div className="space-y-2 text-gray-700">
            <p>📍 Morocco</p>
            <p>📧 email@website.com</p>
            <p>📞 +212 600 000 000</p>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white text-black shadow-xl rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Send us a message
          </h2>

          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Your Name"
              className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
            />

            <button
              type="submit"
              className="bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>

      <Footer />
    </div>
  );
}