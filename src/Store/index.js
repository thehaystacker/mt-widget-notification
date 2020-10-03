import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import alerts from "../Store/Notifications";

const rootReducer = combineReducers({
  alerts,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
