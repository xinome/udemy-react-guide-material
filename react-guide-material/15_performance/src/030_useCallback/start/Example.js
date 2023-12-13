import React, { useState, useCallback } from "react";
import Child from "./Child";

const Example = () => {
  console.log("Parent render");
  
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  // 親コンポーネントが更新された時に毎時更新される
  // useCallbackを使うことで、関数の再レンダリングを防ぐことができる
  const clickHandler = useCallback(() => {
    setCountB((pre) => pre + 1);
  }, []);

  const clickHandler2 = () => {
    setCountB((pre) => pre + 1);
  }
  console.log(Object.is(clickHandler, clickHandler2));

  return (
    <div className="parent">
      <div>
        <h3>親コンポーネント領域</h3>
        <div>
          <button
            onClick={() => {
              setCountA((pre) => pre + 1);
            }}
          >
            ボタンA
          </button>
          <span>親のstateを更新</span>
        </div>
      </div>
      <div>
          <p>ボタンAクリック回数：{countA}</p>
      </div>
      <Child countB={countB} onClick={clickHandler}/>
    </div>
  );
};

export default Example;