import React from "react";
import { Posterurl } from "../utils/constant";

const MovieCard = ({ movies }) => {
  if (!movies) return <p>Loading movies...</p>; // Fallback UI when movies is not available

  if (movies.length === 0) return <p>No movies available</p>; // Message when there are no movies

  return (
    <div className="flex ">
      {movies.map((ele, index) => (
        <div key={ele.id || index} className="w-32 lg:w-44 p-2">
          <img
            className="rounded-sm"
            src={
              ele.poster_path
                ? Posterurl + ele.poster_path
                : "/images/placeholder.jpg"
            }
            alt={ele.title || "Movie poster"}
            onError={(e) => (e.target.src = "/images/placeholder.jpg")}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
