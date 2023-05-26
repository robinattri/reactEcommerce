import { createStore, applyMiddleware } from "redux";
import  reducers from './productReducer/index';
import thunk from "redux-thunk";

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);
export default store;