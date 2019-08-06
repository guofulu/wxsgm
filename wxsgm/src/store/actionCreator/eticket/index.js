// import React from "react"
// import axios from "axios"
// import eticketType from '../../actionType/eticket'
// import showsLibraryType from "../../actionType/showsLibrary";
// const upShowsList = function (payload) {
//     return{
//         type:showsLibraryType.UP_SHOWSLIBRARY,
//         payload
//     }
//
// };
// export default {
//     getShowsList(){
//         return async (dispatch)=>{
//             const {data} = await axios.get("/juoooM/Search/getShowList?category=0&city_id=4&page=1&keywords=&version=6.0.1&referer=2")
//             dispatch(upShowsList(data.list))
//             // console.log(2222,data)
//         }
//     },