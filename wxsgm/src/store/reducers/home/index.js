import initState from '../../state/home';
import homeType from '../../actionType/home'
export default function(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    switch(type){
        case homeType.UP_CLASSIFY_HOME:
            state.ClassifyHome = payload;
            break;
        case homeType.UP_FLOOR_SHOW:
            state.FloorShow = payload;
            break;
        case homeType.UP_RECOMMEND_SHOW:
            state.RecommendShow = payload;
            break;
        case homeType.UP_HOTS_RECOMMEND_LIST:
            state.HotsRecommendList = payload;
            break;
        case homeType.UP_REGISTER_COUPON:
            state.RegisterCoupon = payload;
            break;
        case homeType.UP_VIP_HOME_SCHEDULAR:
            state.VipHomeSchedular = payload;
            break;
        case homeType.UP_HOT_THEATRE:
            state.HotTheatre = payload;
            break;
        case homeType.UP_TOUR_RECOMMEND_LIST:
            state.TourRecommendList = payload;
            break;
        default:
            break;
    }
    return state
}