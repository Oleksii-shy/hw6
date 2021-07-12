import {combineReducers} from "redux";
import {counterReducer} from "./Counter";
import {todosReducer} from "./Todos";

export const rootReducer = combineReducers({
    counterReducer,
    todosReducer
});