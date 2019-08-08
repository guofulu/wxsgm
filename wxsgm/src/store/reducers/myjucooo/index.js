import initState from "../../state/myjucooo"
import myintegral from "../../actionType/myjucooo";
import mycarmatket from "../../actionType/myjucooo"
export default function (state = initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state))
    if(type === myintegral.UP_MYINTEGRAL){
        state.MyintegralList = payload
    }
    else if(type === mycarmatket.UP_CARMARKET ){
        state.MyCarMarketList = payload
    }
    return state
}