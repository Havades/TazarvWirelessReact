import { combineReducers } from "redux";
import playingReducer from "./playingReducer";
import loginReducer from "./loginReducer";

const reducers = combineReducers({
    login : loginReducer ,
    playing : playingReducer
})

export default reducers;