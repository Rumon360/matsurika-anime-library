import { combineReducers } from "redux";
import animesReducer from "./animesReducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
  animes: animesReducer,
  detail: detailReducer,
});

export default rootReducer;
