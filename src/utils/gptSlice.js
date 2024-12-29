import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gpt: false,
  },
  reducers: {
    setgpt: (state) => {
      state.gpt = !state.gpt;
    },
  },
});
export const { setgpt } = gptSlice.actions;
export default gptSlice.reducer;
