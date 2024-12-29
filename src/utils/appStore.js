import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import movieDetailReducer from "./movieDetailSlice";
import actorReducer from "./actorSlice";
const appStore = configureStore({
  reducer: {
    userSlice: useReducer,
    movie: movieReducer,
    gpt: gptReducer,
    detail: movieDetailReducer,
    actor: actorReducer,
  },
});

export default appStore;
