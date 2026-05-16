import { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })


    })
    const data = await res.json();
    if (res.ok) {

      localStorage.setItem(
        "user",
        JSON.stringify(data)
      );

      window.location.reload();

    } else {

      alert(data.message);

    }

    console.log(data);
  }
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">

      <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-center text-orange-400 mb-6">
          Login
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg outline-none bg-gray-700 text-white"
          />


          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-lg outline-none bg-gray-700 text-white"
          />

          {/* Button */}


          {
            user ? (

              <button
                type="button"
                onClick={() => {
                  localStorage.removeItem("user");
                  window.location.reload();
                }}
                className="bg-red-500 hover:bg-red-600 transition p-3 rounded-lg font-semibold"
              >
                Logout
              </button>

            ) : (

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 transition p-3 rounded-lg font-semibold"
              >
                Sign In
              </button>

            )
          }

        </form>


        <p className="text-center text-gray-400 mt-4 text-sm">
          Don’t have an account?{" "}
          <span className="text-orange-400 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
}