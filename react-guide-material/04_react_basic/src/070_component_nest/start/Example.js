import "./components/Child.css"
import Child from "./components/Child";   // export defaultとしたコンポーネントは、import時に任意の名前でimportできる

const Example = () => {
  return <Child />;
};

export default Example;
