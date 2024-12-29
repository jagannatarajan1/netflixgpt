import React from "react";

import Maincontainer from "./../components/Maincontainer";
import Secondcontainer from "../components/Secondcontainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useNowplayingMovie from "../hooks/useNowplayingMovie";
import useTopRattedMovies from "../hooks/useTopRattedMovies";
import useUpComingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import Gpt from "../components/Gpt";

const Home = () => {
  const gpt = useSelector((store) => store.gpt.gpt);
  useNowplayingMovie();
  usePopularMovies();
  useTopRattedMovies();
  useUpComingMovies();
  // useEffect(() => {}, [gpt]);
  return (
    <>
      {gpt ? (
        <Gpt />
      ) : (
        <>
          <Maincontainer></Maincontainer>
          <Secondcontainer></Secondcontainer>
        </>
      )}
    </>
  );
};

export default Home;
