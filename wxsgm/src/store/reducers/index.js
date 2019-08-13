import {combineReducers} from 'redux';
import home from './home'
import theatre from "./theatre/index"
import showsLibrary from "./showsLibrary"

import myjucooo  from "./myjucooo"
import myintegral from "./myjucooo"

import search from "./search"
import vipIndex from './vipIndex'

export default combineReducers({
    home,
    theatre,
    showsLibrary,
    myjucooo,
    search,
    myintegral,
    vipIndex
})