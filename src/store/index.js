import {createStore, combineReducers} from "redux";
import {cashReducer} from "./cashReducer";
import {castomerReducer} from './castomerReducer'

const rootReducer = combineReducers({
    castomerReducer: castomerReducer,
    cashReducer: cashReducer
})
export const store = createStore(rootReducer)