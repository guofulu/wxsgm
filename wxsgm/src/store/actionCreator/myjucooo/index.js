import myintegralType from "../../actionType/myjucooo"
import mycarmarketType from "../../actionType/myjucooo"
import mycardsType from "../../actionType/myjucooo"

import axios from "axios"

const upMyintegralList = function (payload) {
    return{
        type:myintegralType.UP_MYINTEGRAL,
        payload
    }
}
const upMycarList = function (payload) {
    return{
        type:mycarmarketType.UP_CARMARKET,
        payload
    }
}
const upMycards = function (payload) {
    return{
        type:mycardsType.UP_CARDS,
        payload
    }
}
export default {
    getMyintegralList() {
        return async (dispatch) => {
            const data = await axios.get("/juoooM/Myjuooo/ajaxintegral?p=1")
            dispatch(upMyintegralList(data.list))
            // console.log(45452222,data)
        }
    },
    getMycarList(){
        return async(dispatch)=>{
            const data = await axios.get("/juoooAPI/Card/index/hotBanner?version=6.0.3&referer=2")
            console.log(22222,data)
            dispatch(upMycarList(data))
        }
    },
    getMycards(){
        return async (dispatch)=>{
            const data = await axios.get("/juoooAPI/Card/index/getCardGroupList?version=6.0.3&referer=2")
            console.log(3333333,data)
            dispatch(upMycards(data))
        }
    }
}