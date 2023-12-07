import { useCalc } from "../context/CalcContext"; 
import { useCalcDispatch } from "../context/CalcContext";

const Input = () => {

  // state, dispatch用のContextをそれぞれ作成
  const state = useCalc();
  const dispatch = useCalcDispatch();
  const numChangeHandler = (e) => {
    dispatch({type: 'change', payload: {name: e.target.name, value: e.target.value}});
  };

  return (
    <>
      <div>
        {state}:
        <input
          type="number"
          name={state}
          value={state}
          onChange={numChangeHandler}
        />
      </div>
    </>
  );
};

export default Input;