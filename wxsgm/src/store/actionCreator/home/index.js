import homeType from '../../actionType/home';
import axios from 'axios';


export default {
    getRegisterCoupon(){
        return async (dispatch)=>{
            const data = await axios.get('/juoooAPI/Promotion/coupon/getRegisterCoupon?version=6.0.1&referer=2');
            console.log(111,data)
        }
    },

    getClassifyHome(){
        return async (dispatch)=>{
            const data = await axios.get('/juoooAPI/home/index/getClassifyHome?city_id=1&abbreviation=SZ&version=6.0.1&referer=2');
            console.log(222,data)
        }
    },

    getHotsRecommendList(){
        return async (dispatch)=>{
            const data = await axios.get('/juoooAPI/home/index/getHotsRecommendList?city_id=1&version=6.0.1&referer=2');
            console.log(333,data)
        }
    },

    getFloorShow(){
        return async (dispatch)=>{
            const data = await axios.get('/juoooAPI/home/index/getFloorShow?city_id=1&version=6.0.1&referer=2');
            console.log(444,data)
        }
    },

    getRecommendShow(){
        return async (dispatch)=>{
            const data = await axios.get('/juoooAPI/home/index/getRecommendShow?cityAdd=SZ&page=1&version=6.0.1&referer=2');
            console.log(555,data)
        }
    },

    getVipHomeSchedular(){
        return async (dispatch)=>{
            const data = await axios.get('/juoooAPI/vip/index/getVipHomeSchedular?version=6.0.1&referer=2');
            console.log(666,data)
        }
    },
}
