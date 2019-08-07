import {combineReducers} from 'redux';
import home from './home'
import theatre from "./theatre/index"
import showsLibrary from "./showsLibrary"
import myintegral  from "./myintegral"
export default combineReducers({
    home,
    theatre,
    showsLibrary,
    myintegral
})