import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./store"

// redux-thunkの定義
// const thunkFunction = (payload) => {
//   return (dispatch, getState) => {
//     副作用処理: 非同期処理、API通信、タイマー処理など
//   }
// }

const Example = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Example;
