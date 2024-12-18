import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "GptSearch",
  initialState: {
    ShowSearch: false,
  },
  reducers: {
    ToggleGptSearchView: (state) => {
      state.ShowSearch = !state.ShowSearch;
    },
  },
});

export const { ToggleGptSearchView } = GptSlice.actions;
export default GptSlice.reducer;
