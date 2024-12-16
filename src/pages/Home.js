import React, { useEffect } from "react";
// import { useEffect } from "react";
import { url } from "../utils/constant";
import { apiConstant } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/movieSlice";
import Maincontainer from "./../components/Maincontainer";
import Secondcontainer from "../components/Secondcontainer";

const Home = () => {
  const dispatch = useDispatch();
  const NowPlayingMovies = async () => {
    const response = await fetch(url, apiConstant);
    const data = await response.json();
    console.log(data.results);
    dispatch(addMovies(data.results));
  };
  useEffect(() => {
    NowPlayingMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Maincontainer></Maincontainer>
      <Secondcontainer></Secondcontainer>
    </>
  );
};

export default Home;
