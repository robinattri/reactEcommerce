import { combineReducers } from "redux";
import { productReducers } from "./productReducers";

const reducers = combineReducers({
    allproduct : productReducers,
});

export default reducers;
