import React from "react";
import useMovieDetails from "../hooks/useMovieDetails";
import Videocontainer from "./Videocontainer";
import { useSelector } from "react-redux";
import VideoDetailTitle from "./VideoDetailTitle";
import useActorDetails from "../hooks/useActorDetails";
import Cast from "./Cast";

const MovieDetails = () => {
  useMovieDetails();
  useActorDetails();
  const moviedetails = useSelector((store) => store.detail);
  const actordetails = useSelector((store) => store.actor);
  console.log(moviedetails + "before");

  if (moviedetails === null) return;
  console.log(moviedetails + "after");

  return (
    <div className="">
      <Videocontainer id={moviedetails.id}></Videocontainer>

      <VideoDetailTitle
        title={moviedetails.title}
        poster_path={moviedetails.poster_path}
        overview={moviedetails.overview}
        genres={moviedetails.genres}
        release_date={moviedetails.release_date}
        vote_averag={moviedetails.vote_average}
      />
      <div className="lg:-mt-60 pl-9 relative z-20 bg-black">
        <Cast title={"Top Cast"} actor={actordetails.cast}></Cast>
      </div>
    </div>
  );
};

export default MovieDetails;
