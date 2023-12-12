import { createSlice } from "@reduxjs/toolkit";
import { asyncCount } from "../../api/counter";

const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    add(state, { type, payload }) {
      state.count = state.count + payload;
      // const newState = { ...state };
      // newState.count = state.count + payload
      // return newState;
    },
    minus(state, { type, payload }) {
      state.count = state.count - payload;
      // const newState = { ...state };
      // newState.count = state.count - payload
      // return newState;
    }
  }
})

const { add, minus } = counter.actions;

// 非同期処理
const addAsync = (payload) => {
  return async (dispatch, getState) => {
    const state = getState();
    console.log(state);
    
    const reaponse = await asyncCount(payload);
    dispatch(add(reaponse.data));
  }
};


export { add, minus, addAsync }
export default counter.reducer