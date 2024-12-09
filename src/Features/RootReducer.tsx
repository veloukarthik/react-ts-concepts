import { combineReducers } from "redux";
import TodoReducer from "./Todo/TodoReducer";
import counterSlice from "./Counter/counterSlice";


const RootReducer = combineReducers({
    todo: TodoReducer,
    counter: counterSlice
})

export default RootReducer;
