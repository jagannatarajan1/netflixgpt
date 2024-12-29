import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const StarRating = ({ vote }) => {
  const star = Math.floor(vote / 2);
  const fullStars = Math.floor(star); // Get the number of full stars
  const halfStar = star % 1 >= 0.5; // Check if there should be a half star
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Calculate the number of empty stars
  console.log(fullStars, halfStar, emptyStars);

  return (
    <div className="flex text-red-600 text-lg">
      {/* Render full stars */}
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <FaStar key={`full-${index}`} />
        ))}

      {/* Render half star if necessary */}
      {halfStar && <FaStarHalfAlt />}

      {/* Render empty stars */}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <FaRegStar key={`empty-${index}`} />
        ))}
    </div>
  );
};

export default StarRating;
