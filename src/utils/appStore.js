import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import movieReducer from "./movieSlice";

const appStore = configureStore({
  reducer: {
    userSlice: useReducer,
    movie: movieReducer,
  },
});

export default appStore;
