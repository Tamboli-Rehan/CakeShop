import { combineReducers } from "redux";
import cartReducer from "./cartReducer.jsx";

const rootreducers= combineReducers({
    cart:cartReducer
})
export default rootreducers;
