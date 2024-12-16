import { useEffect, useState } from "react";
import netflixBackground from "../assets/netflixImg.jpg";
import Validate from "../utils/Validate";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { profileImage } from "../utils/constant";
const Loginpage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, setlogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  useEffect(() => {
    setError(null);
  }, [login]);
  const formSubmitHandler = () => {
    console.log(email, password);

    const valid = Validate(email, password);
    setError(valid);
    if (valid) return;
    console.log(email, password, login);
    if (login) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name,
            photoURL: { profileImage },
          })
            .then(() => {
              console.log(user);
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(addUser({ uid, email, displayName, photoURL }));
              // navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          setEmail("");
          setPassword("");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          setEmail("");
          setPassword("");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/invalid-credential") {
            setError("User is not found");
          }
          console.error(errorCode, "+", errorMessage);
          // ..
        });
    }
  };

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
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
              className="bg-black outline outline-1 outline-red-600 rounded focus:outline-none focus:ring-1 focus:ring-white px-10 md:px-12 py-4 my-4"
            />
          )}
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-black outline outline-1 outline-red-600 rounded focus:outline-none focus:ring-1 focus:ring-white  white px-10 md:px-12 py-4 my-4"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="bg-black outline outline-1 outline-red-600 rounded focus:outline-none focus:ring-1 focus:ring-white  white px-10 md:px-12 py-4 my-4"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {error && <p className="text-red-600 font-semibold ">{error}</p>}
          {!login ? (
            <button
              className="bg-red-600 py-2 rounded my-3.5 opacity-100 "
              onClick={formSubmitHandler}
            >
              Sign In
            </button>
          ) : (
            <button
              className="bg-red-600 py-2 rounded my-3.5 opacity-100"
              onClick={formSubmitHandler}
            >
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
              {login ? "Sign In Now" : "Sign Up Now"}
            </button>
          </div>
        </form>
      </div>

      {/* Add your content here */}
    </div>
  );
};

export default Loginpage;
