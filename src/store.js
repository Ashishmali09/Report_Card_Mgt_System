import rootReducer from "./reducers/index"
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"

export default createStore(rootReducer,applyMiddleware(thunk))