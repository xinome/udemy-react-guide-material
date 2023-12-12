import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    add(state, { type, payload }) {
      // immutabilityの保持
      const newState = { ...state };
      newState.count = state.count + payload;
      return newState;
    },
    minus(state, { type, payload }) {
      const newState = { ...state };
      newState.count = state.count - payload;
      return newState;
    }
  }
})

const { add, minus } = counter.actions;

export { add, minus }
export default counter.reducer