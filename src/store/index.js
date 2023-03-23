import {createStore, combineReducers, applyMiddleware} from "redux";
import {cashReducer} from "./cashReducer";
import {castomerReducer} from './castomerReducer';
import thunk from "redux-thunk";
import {composeWithDevTools} from "@redux-devtools/extension";

const rootReducer = combineReducers({
    castomerReducer: castomerReducer,
    cashReducer: cashReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))