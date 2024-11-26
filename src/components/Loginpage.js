import { useState } from "react";
import netflixBackground from "../assets/netflixImg.jpg";

const Loginpage = () => {
  const [login, setlogin] = useState(false);
  return (
    <div className="relative w-screen h-screen flex justify-center items-center">
      <img
        className="absolute w-full h-full object-cover"
        src={netflixBackground}
        alt="Netflix Background"
      />
      <div className="container absolute   bg-black opacity-90 text-white w-fit p-8 rounded">
        <form
          action=""
          className="flex flex-col   md:w-96"
          onSubmit={(e) => e.preventDefault()}
        >
          <p className="text-3xl font-bold mb-4"> Sign In</p>
          {login && (
            <input
              type="text"
              placeholder="Enter Your Email"
              className="bg-black outline outline-1 outline-red-600 rounded focus:outline-none focus:ring-1 focus:ring-white  px-12 py-4 my-4"
            />
          )}
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-black outline outline-1 outline-red-600 rounded focus:outline-none focus:ring-1 focus:ring-white  px-12 py-4 my-4"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="bg-black outline outline-1 outline-red-600 rounded focus:outline-none focus:ring-1 focus:ring-white  px-12 py-4 my-4"
          />{" "}
          {!login ? (
            <button className="bg-red-600 py-2 rounded my-3.5 opacity-100">
              Sign In
            </button>
          ) : (
            <button className="bg-red-600 py-2 rounded my-3.5 opacity-100">
              Sign Up
            </button>
          )}
          <div className="flex px-3 py-3">
            <p className="opacity-95">
              {!login ? "New to Netflix?" : "Already Register"}{" "}
            </p>
            <button
              className="px-3 font-bold "
              onClick={() => setlogin(!login)}
            >
              {!login ? "Sign In Now" : "Sign Up Now"}
            </button>
          </div>
        </form>
      </div>

      {/* Add your content here */}
    </div>
  );
};

export default Loginpage;
