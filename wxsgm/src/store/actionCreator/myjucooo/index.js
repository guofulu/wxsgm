import myintegralType from "../../actionType/myjucooo"
import axios from "axios"

const upMyintegralList = function (payload) {
    return{
        type:myintegralType.UP_MYINTEGRAL,
        payload
    }
}
export default {
    getMyintegralList() {
        return async (dispatch) => {
            // const data = await axios.get("/juoooM/Myjuooo/ajaxintegral?p=1")
            //dispatch(upMyintegralList(data.list))
            // console.log(45452222,data)
        }
    }
}