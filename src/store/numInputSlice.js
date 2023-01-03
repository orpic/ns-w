import { createSlice } from "@reduxjs/toolkit";

const numInputSlice = createSlice({
  name: "numInput",
  initialState: {
    numInputVal: "",
  },

  reducers: {
    validateAndSetNumInputVal(state, action) {
      const newNum = action.payload;

      if (newNum.charAt(0) > 5) {
        state.numInputVal = newNum;
      }
    },
  },
});

export const { validateAndSetNumInputVal } = numInputSlice.actions;

export default numInputSlice;
