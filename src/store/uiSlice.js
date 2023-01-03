import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { errorState: false },
  reducers: {
    toggle(state) {
      state.errorState = !state.errorState;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
