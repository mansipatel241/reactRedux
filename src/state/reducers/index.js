import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

//combines multiple reducer to a single reducer function
const reducer = combineReducers({
    amount : amountReducer
})

export default reducer;