//首页
import Home from '../views/home/Home';
//城市选择
import SelectCityme from '../views/selectCity';
//票夹
import Eticket from "../views/eticket/eticket"
//剧院
import Theatre from "../views/theatre/theatre"
//vip
import buy from "../components/shop/vip/buy";
//演出详情
import Ticket from "../views/theatre/ticket";
//意见反馈-城市选择
import CitySelect from "../views/feedback/citySelect"

// 我的相关的
import Myjuooo from "../views/myjuooo/Myjuooo"
import Mysecurity from '../views/myjuooo/Mysecurity';
import ShowsLibrary from '../views/showsLibrary/ShowsLibrary';
//搜索
import Search from "../views/search/index"
import Mymoney from "../views/myjuooo/mymoney"

import Myintegral from "../views/myjuooo/myintegral"
import MyCouponExchange from "../views/myjuooo/couponExchange"
//橙卡plus
import Plus from "../views/plus/index";
//意见反馈
import Feedback from "../views/feedback/index"
//vip+会员
import VipInedx from '../views/vipIndex/index';

//登录注册
import Login from '../views/Login/Login';
import Forget from '../views/Login/Forget';
import Password from '../views/Login/Password';

export default [
    {//首页
        to:'/',
        path:'/',
        context:'首页',
        component:Home,
        exact:true,
        meta:{
            title:'聚橙网',
            isFooter:true,
            isNav:true
        }
    },
    {//城市选择
        path:'/index/selectCity',
        context:'城市定位',
        component:SelectCityme,
        meta:{
            title:'聚橙网',
            isFooter:true,
        }
    },
    {//剧院
        to:'/theatre/theatreList',
        path:'/theatre/theatreList',
        context:'剧院',
        component:Theatre,
        meta:{
            title:'聚橙网',
            isFooter:true,
        }
    },
    {//票夹
        to:'/eticket/list',
        path:'/eticket/list',
        context:'票夹',
        component:Eticket,
        meta:{
            title:'聚橙网',
            isFooter:false,
        }
    },
    {//演出详情页
        path:'/ticket/:type',
        context:'我的',
        component:Ticket,
        meta:{
            title:'聚橙网',
            isFooter:false,
        }
    },
    {//俺的
        to:'/myjuooo/myjuooo',
        path:'/myjuooo/myjuooo',
        context:'我的',
        component:Myjuooo,
        meta:{
            title:'聚橙网',
            isFooter:true,
        }
    },
    {//我的Vip
        to:'/shop/vip/buy',
        path:'/shop/vip/buy',
        context:'我的',
        component:buy,
        meta:{
            title:'VIP',
            isFooter:false,
        }
    },
    {//我的路由-设置
        to:'/Myjuooo/Mysecurity',
        path:'/Myjuooo/Mysecurity',
        context:'我的',
        component:Mysecurity,
        meta:{
            title:'账户设置',
            isFooter:false,
        }
    },
    {//我的路由-余额
        to:'/Myjuooo/mymoney',
        path:'/Myjuooo/mymoney',
        context:'我的',
        component:Mymoney,
        meta:{
            title:'我的余额',
            isFooter:false,
        }
    },
    {//我的路由-积分
        to:'/Myjuooo/couponExchange',
        path:'/Myjuooo/couponExchange',
        context:'我的',
        component:Myintegral,
        meta:{
            title:'我的积分',
            isFooter:false,
        }
    },
    {//我的路由-优惠券
        to:'/Myjuooo/Myintegral',
        path:'/Myjuooo/Myintegral',
        context:'我的',
        component:MyCouponExchange,
        meta:{
            title:'优惠券',
            isFooter:false,
        }
    },

    {//演出页面
        to:'/show/showsLibrary',
        path:'/show/showsLibrary/:category',
        context:'我的',
        component:ShowsLibrary,
        meta:{
            title:'演出',
            isFooter:false,
        }
    },
    {//搜索页面
        to:'/search/index',
        path:'/search/index',
        context:'搜索',
        component:Search,
        meta:{
            title:'搜索',
            isFooter:false,
        }
    },

    {//橙PLUS卡
        to: '/plus/index',
        path: '/plus/index',
        context: '搜索',
        component: Plus,
        meta: {
            title: '橙PLUS卡',
        }
    },
    { //vip+会员
        to:'/vip/index',
        path:'/vip/index',
        context:'VIP+会员',
        component:VipInedx,
        meta:{
            title:'聚橙网',
            isFooter:false,
        }
    },
    //意见反馈
    {
        to:'/feedback/index',
        path:'/feedback/index',
        context:"意见反馈",
        component:Feedback,
        meta:{
            title:'聚橙网',
            isFooter:false,
        }
    },
    //选择你的成城市 连接意见反馈
    {
        to:'/feedback/citySelect',
        path:'/feedback/citySelect',
        context:"聚橙网",
        component:CitySelect,
        meta:{
            title:'聚橙网',
            isFooter:false,
        }
    },
]