import { applyMiddleware, createStore } from "redux";
import RootReducer from "./RootReducer";
import { thunk } from "redux-thunk";


const Store = createStore(RootReducer);

export default Store;