import React, { useEffect, useState } from "react";
import { videourl } from "../utils/constant";
import { apiConstant } from "../utils/constant";

const Videocontainer = () => {
  const [finaltrailer, setfinaltrailer] = useState("");
  const fetchvideo = async () => {
    fetch(videourl, apiConstant)
      .then((res) => res.json())
      .then((json) => {
        const searchvideo = json.results;
        const trailer = searchvideo.filter((video) => video.type === "Trailer");
        const endtrailer = trailer.length <= 0 ? searchvideo[0] : trailer[0];
        console.log(endtrailer);
        setfinaltrailer(endtrailer.key);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchvideo();
  }, []);

  return (
    <div className="">
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube-nocookie.com/embed/" +
          finaltrailer +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Videocontainer;
