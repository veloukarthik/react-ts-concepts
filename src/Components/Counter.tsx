import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";

const initialState = { count: 0 };

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - Number(action.payload) };
    default:
      throw new Error();
  }
}

function Counter() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const count = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="container mx-auto bg-indigo-900 text-center py-4 lg:px-4 text-white">
      <h1>Counter App</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        -
      </button>
       {count}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch({ type: "increment", payload: 5 })}>
        +
      </button>
    </div>
  );
}

export default Counter;