import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className=" absolute pt-[20%] px-10   bg-gradient-to-r from-black ">
        <h1 className="text-4xl lg:text-5xl font-bold text-white ">{title}</h1>
        <p className="py-6 text-sm w-11/12 lg:text-lg lg:w-1/4 text-white ">
          {overview}
        </p>
        <div className="flex">
          <button className="  text-black px-7 py-2 lg:px-12 lg:py-3  bg-white  rounded-md hover:opacity-70">
            Play
          </button>
          <button className=" px-7 py-2 ml-2 lg:px-12 lg:py-3 bg-gray-500  bg-opacity-50 rounded-md text-white">
            More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
