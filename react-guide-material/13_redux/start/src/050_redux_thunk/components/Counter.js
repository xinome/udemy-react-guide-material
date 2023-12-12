import { add, minus, addAsync } from "../store/modules/counter"

import CounterResult from "./CounterResult"
import CounterButton from "./CounterButton"

const Counter = () => {
    return (
        <>
            <CounterResult />
            <CounterButton step={2} calcType="+" actionCreator={add} />
            <CounterButton step={2} calcType="-" actionCreator={minus} />
            <CounterButton step={10} calcType="非同期(+)" actionCreator={addAsync} />
            {/* <CounterButton step={10} calcType="非同期(-)" /> */}
        </>
    )
}
export default Counter;