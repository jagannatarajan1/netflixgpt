import { createSlice } from "@reduxjs/toolkit";

const actorSlice = createSlice({
  name: "actors",
  initialState: null,
  reducers: {
    addActors: (state, action) => {
      return action.payload;
    },
    removeActor: (state, action) => {
      return state.filter((actor) => actor.id !== action.payload);
    },
  },
});

export const { addActors, removeActor } = actorSlice.actions;

export default actorSlice.reducer;
