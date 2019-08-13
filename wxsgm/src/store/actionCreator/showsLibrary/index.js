import React from "react"
import axios from "axios"
import showListYes from "../../actionType/showsLibrary"
import showsNav from "../../actionType/showsLibrary"
import showList from "../../actionType/showsLibrary"


const upShowCategory = function (payload) {
    return{
        type:showsNav.UP_SHOWNAV,
        payload
    }
};
const upShowList = function (payload) {//合并
    return{
        type:showList.UP_SHOWSLIST,
        payload
    }
};
const upShowListYes = function (payload) {//覆盖
    return{
        type:showListYes.UP_SHOWSLIBRARY,
        payload
    }
};
export default {
    getShowCategory(){
        return async (dispatch)=>{
            const {data} = await axios.get("/juoooM/Search/getShowCategory?version=6.0.1&referer=2")
            dispatch(upShowCategory(data.show_category_list))
        }
    },
    getShowList({page=1,type=0}){//合并
         // console.log(8989,type,page)
        return async (dispatch)=>{
            const {data} = await axios.get("/juoooM/Search/getShowList?category="+type+"&city_id=0&page="+page+"&version=6.0.3&referer=2")
            // console.log(9999,data)
            dispatch(upShowList(data.list))
        }
    },
    getShowListYes({page=1,type=0}){//覆盖
        // console.log(99990000,type,page)
        return async (dispatch)=>{
            const {data} = await axios.get("/juoooM/Search/getShowList?category="+type+"&city_id=0&page="+page+"&version=6.0.3&referer=2")
            // console.log(9999,data)
            dispatch(upShowListYes(data.list))
        }
    },
}

