import initState from "../../state/myjucooo"
import myintegral from "../../actionType/myjucooo";
export default function (state = initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state))
    if(type === myintegral.UP_MYINTEGRAL){
        state.MyintegralList = payload
    }
    return state
}