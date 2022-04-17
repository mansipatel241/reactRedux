import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

//thunk - helps to execute asynchronous functions

export const store = createStore(reducer, {}, applyMiddleware(thunk));   //reducer, state, middleware

