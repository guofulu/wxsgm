import {combineReducers} from 'redux';
import home from './home'
import theatre from "./theatre/index"
export default combineReducers({
    home,
    theatre
})