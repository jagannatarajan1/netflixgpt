import { createSlice } from "@reduxjs/toolkit";

const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState: null,
  reducers: {
    setMovieDetail: (state, action) => {
      return action.payload;
    },
  },
});

export const { setMovieDetail } = movieDetailSlice.actions;

export default movieDetailSlice.reducer;
