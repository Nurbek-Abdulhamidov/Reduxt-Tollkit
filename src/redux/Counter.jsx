import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "counter",
  initialState: { data: 0, text: "Hi" },
  reducers: {
    increment: (state, action) => {
      state.data += 1;
    },
    decrement: (state, { payload }) => {
      state.data -= payload.a;
    },
    changeText: (state, { payload }) => {
      state.text = `${payload}`;
    },
  },
});

export const { increment, decrement, changeText } = CounterSlice.actions;
export default CounterSlice.reducer;
