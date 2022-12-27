import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const specStore = createSlice({
  name: "spec",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = specStore.actions;

export default specStore.reducer;
