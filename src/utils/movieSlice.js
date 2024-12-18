import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowplaying: [],
    popularmovies: [],
    topratedmovies: [],
    upcomingmovies: [],
  },

  reducers: {
    addMovies: (state, action) => {
      state.nowplaying.push(action.payload);
      // return state.nowplaying(action.payload);
    },
    addPopularMovies: (state, action) => {
      state.popularmovies.push(action.payload);
    },
    addTopRatedMovies: (state, action) => {
      state.topratedmovies.push(action.payload);
    },
    addUpComingMovies: (state, action) => {
      state.upcomingmovies.push(action.payload);
    },
  },
});
export const {
  addMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
