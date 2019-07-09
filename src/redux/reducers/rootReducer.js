import { combineReducers } from "redux";
import {choiceReducer} from "./choiceReducer";
import {timeReducer} from "./timeReducer"

export default combineReducers({choiceReducer,timeReducer})