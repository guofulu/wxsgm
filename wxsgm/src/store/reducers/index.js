import {combineReducers} from 'redux';
import home from './home'
import theatre from "./theatre/index"
import showsLibrary from "./showsLibrary"
import search from "./search"
export default combineReducers({
    home,
    theatre,
    showsLibrary,
    search
})