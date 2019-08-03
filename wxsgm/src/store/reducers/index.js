import {combineReducers} from 'redux';
import home from './home'
import theatre from "./theatre/index"
import showsLibrary from "./showsLibrary"
export default combineReducers({
    home,
    theatre,
    showsLibrary
})