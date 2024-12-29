import React from "react";
import { Posterurl } from "../utils/constant";
import StarRating from "./StarRating";

const VideoDetailTitle = ({
  title,
  overview,
  poster_path,
  genres,
  release_date,
  vote_averag,
}) => {
  return (
    <>
      <div className="  pt-0 lg:pt-[1%] px-10   aspect-video bg-black ">
        <div className="flex flex-col lg:flex-row gap-5  lg:gap-36  items-center">
          <img
            src={Posterurl + poster_path}
            alt=""
            className="w-3/5 lg:w-1/4 h-auto pt-[1%]  rounded-md"
          />
          <div className="">
            <h1 className="text-xl text-center lg:text-start lg:text-6xl font-bold text-white ">
              {title}
            </h1>
            <div className="flex gap-3 text-xs lg:text-md text-white lg:pt-1 text-center">
              {genres.map((ele) => {
                return <p key={ele.id}>{ele.name}</p>;
              })}
              {/* <p className="lg:text-md text-xs ">({release_date})</p> */}
            </div>
            <div className="flex items-center gap-2 lg:pt-2 ">
              <p className="text-white text-lg pt-1">Rating</p>
              <StarRating vote={vote_averag} />
            </div>
            <div className="lg:pt-4">
              <p className="text-white text-xl font-semibold ">Overview</p>
              <p className="lg:py-2  text-sm  lg:text-lg lg:w-11/12 text-gray-100 ">
                {overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetailTitle;
