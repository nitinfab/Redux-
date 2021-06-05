import add from "./add";
import { combineReducers } from "redux";

const everyReducers = combineReducers({
  add: add
});

export default everyReducers;
