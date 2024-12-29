import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptResult from "./GptResult";
import netflixBackground from "../assets/netflixImg.jpg";

const Gpt = () => {
  return (
    <div>
      <img
        className="absolute w-full h-full object-cover -z-10"
        src={netflixBackground}
        alt="Netflix Background"
      />
      <div className="">
        <GptSearchBar />
        <GptResult />
      </div>
    </div>
  );
};

export default Gpt;
