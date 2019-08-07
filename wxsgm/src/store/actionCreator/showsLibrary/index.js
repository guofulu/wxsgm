import React from "react"
import axios from "axios"
import showsLibraryType from "../../actionType/showsLibrary"
import showsNav from "../../actionType/showsLibrary"
import showList from "../../actionType/showsLibrary"

const upShowsList = function (payload) {
    return{
        type:showsLibraryType.UP_SHOWSLIBRARY,
        payload
    }
};
const upShowCategory = function (payload) {
    return{
        type:showsNav.UP_SHOWNAV,
        payload
    }
};
const upShowList = function (payload) {
    return{
        type:showList.UP_SHOWSLIST,
        payload
    }
};
export default {
    getShowsList(){
        return async (dispatch)=>{
            const {data} = await axios.get("/juoooM/Search/getShowList?category=0&city_id=4&page=1&keywords=&version=6.0.1&referer=2")
            dispatch(upShowsList(data.list))
            // console.log(2222,data)
        }
    },
    getShowCategory(){
        return async (dispatch)=>{
            const {data} = await axios.get("/juoooM/Search/getShowCategory?version=6.0.1&referer=2")
            dispatch(upShowCategory(data.show_category_list))
        }
    },
    getShowList(type){
        // console.log(type)
        return async (dispatch)=>{
            const {data} = await axios.get("/juoooM/Search/getShowList?category="+type+"&city_id=0&page=1&keywords=&version=6.0.3&referer=2")

            // console.log(9999,data)
            dispatch(upShowList(data.list))
        }
    }
}

