import { combineReducers } from "redux";
import playingReducer from "./playingReducer";
import loginReducer from "./loginReducer";
import screenReducer from './screenReducer'

const reducers = combineReducers({
    login : loginReducer ,
    playing : playingReducer,
    screen  : screenReducer
})

export default reducers;