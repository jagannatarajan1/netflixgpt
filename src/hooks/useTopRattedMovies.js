import { useEffect } from "react";
import { TopRatedMoviesUrl } from "../utils/constant";
import { apiConstant } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRattedMovies = () => {
  const dispatch = useDispatch();
  const FetchMovies = async () => {
    const response = await fetch(TopRatedMoviesUrl, apiConstant);
    const data = await response.json();
    dispatch(addTopRatedMovies(data.results));
  };
  useEffect(() => {
    FetchMovies();
    // eslint-disable-next-line
  }, []);
};

export default useTopRattedMovies;
