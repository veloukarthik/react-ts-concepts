import { combineReducers } from "redux";
import TodoReducer from "./Todo/TodoReducer";


const RootReducer = combineReducers({
    todo: TodoReducer
})

export default RootReducer;
