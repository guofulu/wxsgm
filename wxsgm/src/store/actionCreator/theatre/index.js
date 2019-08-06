import theatreType from "../../actionType/theatre"
import axios from "axios"
const getTheatreList=function (payload) {
    return{
        type:theatreType.UP_THEATRE_LIST,
        payload
    }
};
const getCityList=function (payload) {
    return{
        type:theatreType.UP_CITY_LIST,
        payload
    }
};
export default {
    getTheatreList(){
        return  async (dispatch)=>{
            const {data} = await axios.get('/juoooM/RestTheatre/getTheatreList?page=1&version=6.0.1&referer=2');
            dispatch(getTheatreList(data.theatre_list))
        }
    },
    getCityList(type){
        return async (dispatch)=>{
            const {data}= await axios.get("/juoooAPI/Schedule/Schedule/getTour?show_id="+type+"&venue_id=2419&version=6.0.3&referer=2")
            console.log(22222,data.tour_list)
            dispatch(getCityList(data.tour_list))
        }
    }
}
