import initState from "../../state/theatre"
import theatre from "../../actionType/theatre"
export default  function (state=initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    switch(type){
        case theatre.UP_THEATRE_LIST:
            state.TheatreList = payload;
            break;
        case theatre.UP_CITY_LIST:
            state.City = payload;
            break;
        case theatre.UP_DATIONSLIST:
            state.DationsList = payload;
            break;
    }
    return state
}
