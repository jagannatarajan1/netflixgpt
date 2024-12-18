import { useEffect } from "react";
import { apiConstant } from "../utils/constant";
import { url } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/movieSlice";
const useNowplayingMovie = () => {
  const dispatch = useDispatch();

  const fetchfunction = async () => {
    const response = await fetch(url, apiConstant);
    const data = await response.json();
    console.log(data.results);
    dispatch(addMovies(data.results));
  };
  useEffect(() => {
    fetchfunction();
    // eslint-disable-next-line
  }, []);
};

export default useNowplayingMovie;
