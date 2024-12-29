import React from "react";
import { Posterurl } from "../utils/constant";
const Cast = ({ title, actor }) => {
  // if (actor === null) return;
  if (!actor || actor.length === 0) return null;
  console.log(actor);
  return (
    <div className="bg-black">
      <p className="text-2xl pt-8 pb-4  px-2 font-semibold  nptext-white ">
        {title}
      </p>
      <div className="flex overflow-x-scroll no-scrollbar bg-black ">
        <div className="flex bg-black ">
          {actor
            .filter((ele) => ele.profile_path !== null)
            .map((ele, index) => (
              <div key={ele.id || index} className="w-32 lg:w-44 p-2 ">
                <img
                  className="  rounded-md"
                  src={
                    ele.profile_path
                      ? Posterurl + ele.profile_path
                      : "/images/placeholder.jpg"
                  }
                  alt={ele.title || "Movie poster"}
                  onError={(e) => (e.target.src = "/images/placeholder.jpg")}
                />
                <p className="text-white text-md pt-2 font-semibold text-center">
                  {ele.name}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cast;
