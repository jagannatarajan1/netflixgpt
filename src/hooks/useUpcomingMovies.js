import { useEffect } from "react";
import { UpComingMoviesUrl } from "../utils/constant";
import { apiConstant } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const FetchMovies = async () => {
    const response = await fetch(UpComingMoviesUrl, apiConstant);
    const data = await response.json();
    console.log(data.results);
    dispatch(addUpComingMovies(data.results));
  };
  useEffect(() => {
    FetchMovies();
    // eslint-disable-next-line
  }, []);
};

export default useUpComingMovies;
