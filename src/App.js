import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Loginpage from "./components/Loginpage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useEffect } from "react";
import { addUser } from "./utils/userSlice";

import Home from "./pages/Home";
import Header from "./components/Header";
import { removeUser } from "./utils/userSlice";
import { useDispatch } from "react-redux";
import MovieDetails from "./components/MovieDetails";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = auth.currentUser;

        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/browse" element={<Home></Home>} />
        <Route path="/browse/:searchTerm" element={<MovieDetails />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
