import React from "react";
import netflixPrimaryLogo from "../assets/Netflix-primary-Logo.png";
import { getAuth, signOut } from "firebase/auth";
import netflixMobileLogo from "../assets/Netflix-mobile-Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { setgpt } from "../utils/gptSlice";
const Header = () => {
  const user = useSelector((store) => store.userSlice);
  const option = useSelector((store) => store.gpt);
  const dispatch = useDispatch();
  console.log(user);
  console.log(option.gpt);
  const navigate = useNavigate();
  const HandleGpt = () => {
    dispatch(setgpt());
  };
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className=" fixed w-screen px-8 py-2 bg-gradient-to-b  from-black  z-50  flex items-center justify-between  ">
      <Link to="/browse">
        <img
          className="hidden md:block w-2/12"
          src={netflixPrimaryLogo}
          alt="Netflix Logo"
        />

        <img
          className="block md:hidden w-8 ml-3"
          src={netflixMobileLogo}
          alt="Netflix Mobile Logo"
        />
      </Link>
      {user && (
        <div className="flex">
          <button
            className="bg-white text-black px-6 rounded-sm mr-2"
            onClick={HandleGpt}
          >
            {!option.gpt ? " Gpt" : "home"}
          </button>

          <img className="w-11 rounded-md" src={user.photoURL} alt="" />
          <p className="text-black pt-2 px-2">{user.displayName}</p>
          <button
            className="bg-red-600 text-white lg:px-6 md:px-8 px-3 py-3 rounded-sm mr-2 text-sm"
            onClick={handleSignOut}
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
