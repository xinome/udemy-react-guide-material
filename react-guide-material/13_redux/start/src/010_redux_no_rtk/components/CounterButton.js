// import { useCounterDispatch } from "../context/CounterContext";
import { useDispatch } from "react-redux";

const CounterButton = ({calcType, step}) => {
    
    // const dispatch = useCounterDispatch();
    const dispatch = useDispatch();
    
    const clickHandler = () => {
        dispatch({ type: calcType, step });
    }

    return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;