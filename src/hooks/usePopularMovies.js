import { useEffect } from "react";
import { PopularMoviesUrl } from "../utils/constant";
import { apiConstant } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const FetchMovies = async () => {
    const response = await fetch(PopularMoviesUrl, apiConstant);
    const data = await response.json();
    dispatch(addPopularMovies(data.results));
  };
  useEffect(() => {
    FetchMovies();
    // eslint-disable-next-line
  }, []);
};

export default usePopularMovies;
