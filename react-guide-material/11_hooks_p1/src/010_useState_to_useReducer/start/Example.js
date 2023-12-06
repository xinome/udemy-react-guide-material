import { useReducer, useState } from "react";

const Example = () => {

  // useStateの書き換え
  const [state, setState] = useState(0);
  const countUp = () => {
    setState((prev) => ++prev);
  };

  // useReducerの書き換え
  const [rstate, dispatch] = useReducer((prev, action) => {
    if(action === "+") {
      return ++prev;
    } else {
      return --prev;
    }
  }, 0);
  const rcounUp = () => {
    dispatch("+");
  };
  const rcounDown = () => {
    dispatch("-");
  };
  
  return (
    <>
      <div>
        <h3>{state}</h3>
        <button onClick={countUp}>+</button>
      </div>
      <div>
        <h3>{rstate}</h3>
        <button onClick={rcounUp}>+</button>
        <button onClick={rcounDown}>-</button>
      </div>
    </>
  );
};

export default Example;
