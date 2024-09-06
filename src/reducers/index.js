import { combineReducers } from "redux";
import counterReducer from "./countReducer.js"
import todoReducer from "./todoReducers.js";
import fetchReducer from "./fetch.js";

const rootReducers = combineReducers({
    counter:counterReducer,
    todos:todoReducer,
    fetch : fetchReducer
})

export default rootReducers;