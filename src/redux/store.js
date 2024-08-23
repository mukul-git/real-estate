import { createStore, combineReducers, applyMiddleware } from "redux";
import { fetchPropertiesReducer } from "./reducers/fetchPropertiesReducer";
// import { fetchProperties } from "./actions/fetchProperties";
import { thunk } from "redux-thunk";

export const rootReducer = combineReducers({
  Properties: fetchPropertiesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
