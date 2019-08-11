import initState from '../../state/vipIndex/index';
import vipType from '../../actionType/vipIndex/index';

export default function (state = initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state))
    switch(type){
        case vipType.PRIOR_BUY_LIST:
            state.PriorBuyList = payload;
            break;
        case vipType.COUPONS_LIST:
            state.CouponsList = payload;
            break;
        case vipType.EXCLUSIVE_LIST:
            state.ExclusiveList = payload;
            break;
        case vipType.DISCOUNT_LIST:
            state.DiscountList = payload;
            break;
        case vipType.WATCH_PER_LIST:
            state.WatchPerList = payload;
            break;
        case vipType.WATCH_PRO_INFO:
            state.WatchPerInfo = payload;
            break;
        default:
            break;
    }
    return state
}