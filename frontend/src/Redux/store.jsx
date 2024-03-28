import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { LoginReducer } from './LoginReducer/loginReducer.js'
import { Taskreducer } from './TaskReducer/TaskReducer.js'
import { thunk } from "redux-thunk";


const Rootreducer = combineReducers({
    LoginReducer,
    Taskreducer
})
export const store = legacy_createStore(Rootreducer, applyMiddleware(thunk));