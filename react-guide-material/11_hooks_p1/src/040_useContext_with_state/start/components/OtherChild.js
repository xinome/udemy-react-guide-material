// import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../Example";

const OtherChild = () => {
  // const [ value, setValue ] = useState(0);
  // 2番目の要素（setState）のみを取得
  const [, setState] = useContext(MyContext);

  const clickHandler = (e) => {
    setState((prev) => prev + 1);
  };

  return (
    <div>
      <h3>他の子コンポーネント</h3>
      <button onClick={clickHandler}>+</button>
      {/* <h3>{value}</h3> */}
    </div>
  );
};

export default OtherChild;
