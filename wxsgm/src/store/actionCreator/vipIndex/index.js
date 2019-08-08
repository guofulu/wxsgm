import vipType from '../../actionType/vipIndex/index';
import axios from 'axios';

const upPriorBuyList = function(payload){
    return {
        type:vipType.PRIOR_BUY_LIST,
        payload
    }
}
const upCouponsList = function(payload){
    return {
        type:vipType.COUPONS_LIST,
        payload
    }
}
const upExclusiveList = function(payload){
    return {
        type:vipType.EXCLUSIVE_LIST,
        payload
    }
}
const upDiscountList = function(payload){
    return {
        type:vipType.DISCOUNT_LIST,
        payload
    }
}
const upWatchPerList = function(payload){
    return {
        type:vipType.WATCH_PER_LIST,
        payload
    }
}
const upWatchPerInfo = function(payload){
    return {
        type:vipType.WATCH_PRO_INFO,
        payload
    }
}

export default {
    getPriorBuyList(status=2){//
        return async (dispatch)=>{
            const {data} = await axios.get('/juoooAPI/vip/index/getPriorBuyList?status='+status+'&page=1&limit=1000&version=6.0.3&referer=2');
            dispatch(upPriorBuyList(data))
            // console.log(1111,data)
            
        }
    },

    getCouponsList(){//
        return async (dispatch)=>{
            const {data} = await axios.get('/juoooAPI/vip/index/getCouponsList?page=1&rule_id=1&version=6.0.3&referer=2');
            dispatch(upCouponsList(data))
            // console.log(222,data)
        }
    },

    getExclusiveList(){//
        return async (dispatch)=>{
            const {data} = await axios.get('/juoooAPI/vip/index/getExclusiveList?page=1&limit=1000&version=6.0.3&referer=2');
            dispatch(upExclusiveList(data))
            // console.log(333,data)
        }
    },

    getDiscountList(){//
        return async (dispatch)=>{
            const {data} = await axios.get('/juoooAPI/vip/index/getDiscountList?page=1&limit=10&version=6.0.3&referer=2');
            dispatch(upDiscountList(data))
            //console.log(444,data)
        }
    },

    getWatchPerList(){//
        return async (dispatch)=>{
            const {data} = await axios.get('/juoooAPI/vip/index/getWatchPerList?page=1&limit=6&version=6.0.3&referer=2');
            dispatch(upWatchPerList(data))
            // console.log(555,data)
        }
    },

    getWatchPerInfo(){//
        return async (dispatch)=>{
            const {data} = await axios.get('/juoooAPI/vip/index/getWatchPerInfo?version=6.0.3&referer=2');
            dispatch(upWatchPerInfo(data))
           // console.log(666,data)
        }
    }
}