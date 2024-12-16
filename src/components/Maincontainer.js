import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import Videocontainer from "./Videocontainer";

const Maincontainer = () => {
  const movie = useSelector((store) => store.movie[0]);
  if (!movie) return;
  const { title, overview, id } = movie;
  console.log(title, overview, id);
  return (
    <div className="">
      <VideoTitle title={title} overview={overview} />
      <Videocontainer id={id}></Videocontainer>
    </div>
  );
};

export default Maincontainer;
