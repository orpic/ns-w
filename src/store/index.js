import { configureStore } from "@reduxjs/toolkit";
import numInputSlice from "./numInputSlice";
import uiSlice from "./uiSlice";

// creating store
export const store = configureStore({
  reducer: {
    numInpit: numInputSlice.reducer,
    // ui: uiSlice.reducer ,
  },
});
