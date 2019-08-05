import theatreType from "../../actionType/theatre"
import axios from "axios"
const getTheatreList=function (payload) {
    return{
        type:theatreType.UP_THEATRE_LIST,
        payload
    }
}
export default {
    getTheatreList(){
        return  async (dispatch)=>{
            const {data} = await axios.get('/juoooM/RestTheatre/getTheatreList?page=1&version=6.0.1&referer=2');
            dispatch(getTheatreList(data.theatre_list))
        }
    }
}