import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  return (
    <>
      <p className="text-2xl pt-8 pb-4  px-2 font-semibold  text-white">
        {title}
      </p>
      <div className="flex overflow-x-scroll no-scrollbar  ">
        <MovieCard movies={movies}></MovieCard>
      </div>
    </>
  );
};

export default MovieList;
