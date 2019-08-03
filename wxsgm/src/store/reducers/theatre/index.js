import initState from "../../state/theatre"
import theatre from "../../actionType/theatre"
export default  function (state=initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    switch(type){
        case theatre.UP_THEATRE_LIST:
            state.TheatreList = payload;
            break;
    }
    return state
}