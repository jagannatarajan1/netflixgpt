import React from "react";

import Maincontainer from "./../components/Maincontainer";
import Secondcontainer from "../components/Secondcontainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useNowplayingMovie from "../hooks/useNowplayingMovie";
import useTopRattedMovies from "../hooks/useTopRattedMovies";
import useUpComingMovies from "../hooks/useUpcomingMovies";

const Home = () => {
  useNowplayingMovie();
  usePopularMovies();
  useTopRattedMovies();
  useUpComingMovies();
  return (
    <>
      <Maincontainer></Maincontainer>
      <Secondcontainer></Secondcontainer>
    </>
  );
};

export default Home;
