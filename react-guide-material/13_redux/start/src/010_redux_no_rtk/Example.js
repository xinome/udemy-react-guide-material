import Counter from "./components/Counter";
// import { CounterProvider } from "./context/CounterContext";

// Redux Toolkitを使わない場合は、Providerを使ってグローバルな状態管理を行う
import { Provider } from "react-redux";
import store from "./store";

const Example = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Example;
