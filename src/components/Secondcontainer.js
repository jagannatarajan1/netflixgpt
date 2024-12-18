import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const Secondcontainer = () => {
  const movies = useSelector((store) => store.movie.nowplaying[0]);
  const popular = useSelector((store) => store.movie.popularmovies[0]);
  const toprated = useSelector((store) => store.movie.topratedmovies[0]);
  const upcoming = useSelector((store) => store.movie.upcomingmovies[0]);
  if (!movies || !popular || !toprated || !upcoming) return;
  console.log(movies);
  console.log(popular);
  console.log(toprated);
  console.log(upcoming);
  return (
    <div className=" bg-black">
      <div className="lg:-mt-60 pl-9 relative z-20">
        <MovieList title={"Now Playing"} movies={movies}></MovieList>
        <MovieList title={"Top Rated"} movies={toprated}></MovieList>
        <MovieList title={"Popular"} movies={popular}></MovieList>
        <MovieList title={"Upcoming"} movies={upcoming}></MovieList>
        <MovieList title={"Now Playing"} movies={movies}></MovieList>
      </div>
    </div>
  );
};

export default Secondcontainer;
