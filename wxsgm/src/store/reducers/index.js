import {combineReducers} from 'redux';
import home from './home'
import theatre from "./theatre/index"
import showsLibrary from "./showsLibrary"

import myintegral  from "./myintegral"

import search from "./search"
import vipIndex from './vipIndex'

export default combineReducers({
    home,
    theatre,
    showsLibrary,
    myintegral,
    search,
    vipIndex
})