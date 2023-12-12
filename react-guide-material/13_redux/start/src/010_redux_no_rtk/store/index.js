// createStoreは非推奨、実際はtoolkitを使う
import { createStore } from 'redux';

// 初期値
const initialState = 0;

const reducer = (state = initialState, { type, step }) => {
  switch (type) {
    case "+":
      return state + step;
    case "-":
      return state - step;
    default:
      // throw new Error('不明なactionです。')
      return state;   // throw new Error('不明なactionです。')は使わない
  }
};

export default createStore(
  reducer
);

