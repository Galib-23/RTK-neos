import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseWithPayload, increment, reset } from "./counterSlice";

const CounterView = () => {

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center mt-36 w-[550px]">
                <h2 className="text-xl font-semibold text-amber-700">Count: {count}</h2>
                <div className="mt-6 flex gap-5">
                    <button onClick={()=>{dispatch(increment())}} className="px-3 py-2 bg-green-500">Increment</button>
                    <button onClick={()=>{dispatch(decrement())}} className="px-3 py-2 bg-red-500">Decrement</button>
                    <button onClick={()=>{dispatch(reset())}} className="px-3 py-2 bg-blue-500">Reset</button>
                    <button onClick={()=>{dispatch(increaseWithPayload(5))}} className="px-3 py-2 bg-blue-500">IncreaseBy5</button>
                </div>
            </div>
        </div>
    );
};

export default CounterView;