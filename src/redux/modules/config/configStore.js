import { combineReducers, createStore } from "redux";
import counter from "../counter";

const rootReducer = combineReducers({
  counter: counter,
});
const store = createStore(rootReducer);

export default store;
