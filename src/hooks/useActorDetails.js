import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MOvieDetailsApi, actorsUrl } from "../utils/constant";
import { useParams } from "react-router-dom";
import { addActors } from "../utils/actorSlice";
const useActorDetails = () => {
  const params = useParams();
  console.log(params.searchTerm);
  const dispatch = useDispatch();
  console.log("useMovieDetails");
  const url = actorsUrl + params.searchTerm + "/credits";
  console.log(url);

  const fetchfunction = async () => {
    const response = await fetch(url, MOvieDetailsApi);
    const data = await response.json();
    console.log(data);
    dispatch(addActors(data));
    // dispatch(addMovies(data.results));
  };
  useEffect(() => {
    fetchfunction();
    // eslint-disable-next-line
    return () => {
      console.log("clean");
      //   dispatch(setMovieDetail(null));
    };
    // eslint-disable-next-line
  }, []);
};

export default useActorDetails;
