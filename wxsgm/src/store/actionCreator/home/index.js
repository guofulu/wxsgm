import homeType from '../../actionType/home';
import axios from 'axios';
const upRegisterCoupon = function(payload){
    return {
        type:homeType.UP_REGISTER_COUPON,
        payload
    }
}
const upClassifyHome = function(payload){
    return {
        type:homeType.UP_CLASSIFY_HOME,
        payload
    }
}
const upHotsRecommendList = function(payload){
    return {
        type:homeType.UP_HOTS_RECOMMEND_LIST,
        payload
    }
}
const upFloorShow = function(payload){
    return {
        type:homeType.UP_FLOOR_SHOW,
        payload
    }
}
const upRecommendShow = function(payload){
    return {
        type:homeType.UP_RECOMMEND_SHOW,
        payload
    }
}
const upVipHomeSchedular = function(payload){
    return {
        type:homeType.UP_VIP_HOME_SCHEDULAR,
        payload
    }
}

export default {
    getRegisterCoupon(){//获取注册优惠券信息
        return async (dispatch)=>{
            const {data} = await axios.get('/juoooAPI/Promotion/coupon/getRegisterCoupon?version=6.0.1&referer=2');
            dispatch(upRegisterCoupon(data))
        }
    },

    getClassifyHome(){//获取分类列表
        return async (dispatch)=>{
            const {data} = await axios.get('/juoooAPI/home/index/getClassifyHome?city_id=1&abbreviation=SZ&version=6.0.1&referer=2');
            dispatch(upClassifyHome(data))
        }
    },

    getHotsRecommendList(){//获取照片推荐列表
        return async (dispatch)=>{
            const {data} = await axios.get('/juoooAPI/home/index/getHotsRecommendList?city_id=1&version=6.0.1&referer=2');
            console.log(333,data)
            dispatch(upHotsRecommendList(data))
        }
    },

    getFloorShow(){//获取楼层信息
        return async (dispatch)=>{
            const {data} = await axios.get('/juoooAPI/home/index/getFloorShow?city_id=1&version=6.0.1&referer=2');
            dispatch(upFloorShow(data))
        }
    },

    getRecommendShow(){//获取推荐信息列表
        return async (dispatch)=>{
            const {data} = await axios.get('/juoooAPI/home/index/getRecommendShow?cityAdd=SZ&page=1&version=6.0.1&referer=2');
            dispatch(upRecommendShow(data))
            console.log('getRecommendShow',data)
        }
    },

    getVipHomeSchedular(){//获取vip相关信息列表
        return async (dispatch)=>{
            const {data} = await axios.get('/juoooAPI/vip/index/getVipHomeSchedular?version=6.0.1&referer=2');
            dispatch(upVipHomeSchedular(data))
        }
    },
}
