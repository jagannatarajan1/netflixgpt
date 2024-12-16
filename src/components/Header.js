import React from "react";
import netflixPrimaryLogo from "../assets/Netflix-primary-Logo.png";
import { getAuth, signOut } from "firebase/auth";
import netflixMobileLogo from "../assets/Netflix-mobile-Logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
const Header = () => {
  const user = useSelector((store) => store.userSlice);
  const dispatch = useDispatch();
  console.log(user);
  const navigate = useNavigate();
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
    <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b  from-black  z-10  flex items-center justify-between  ">
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

      {user && (
        <div className="flex">
          <img className="w-11 rounded-md" src={user.photoURL} alt="" />
          <p className="text-black pt-2 px-2">{user.displayName}</p>
          <button
            className="bg-red-600 text-white px-3 py-2 rounded-md mr-2 text-sm"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
