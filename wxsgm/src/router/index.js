//首页
import Home from '../views/home/Home';
//城市选择
import SelectCityme from '../views/selectCity';
//演出日历
import ShowCalendar from '../components/home/ShowCalendar';
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
import Certification from "../views/myjuooo/certification"
import Mymoney from "../views/myjuooo/mymoney"
import Myintegral from "../views/myjuooo/myintegral"
import MyCouponExchange from "../views/myjuooo/couponExchange"
import MyCouponOverdue from "../views/myjuooo/couponOverdue"
import MyOrderList from "../views/myjuooo/myOrderList"
import Cardproduct from "../views/myjuooo/cardproduct"
import MyCalendar from "../views/myjuooo/calendar"
//搜索
import Search from "../views/search/index"
//橙卡plus
import Plus from "../views/plus/index";
//意见反馈

import Feedback from "../views/feedback/index"

//vip+会员
import VipInedx from '../views/VipIndex';

import Discount from "../views/vip/discount"

import Scores from "../views/Scores/index"



//登录注册
 import Login from '../views/LoginG/Login';
 import PassPort from '../views/LoginG/Passport';
 import SetPassword from '../views/LoginG/SetPassword.js'
// import Forget from '../views/Login/Forget';
// import Password from '../views/Login/Password';


export default [
    {//输入验证码
        path:'/Passport/verify',
        context:'输入验证码',
        component:PassPort,
        exact:true,
        meta:{
            title:'登录',
            isFooter:false,
        }
    },
    {//设置密码
        path:'/Passport/setPassword',
        context:'设置密码',
        component:SetPassword,
        exact:true,
        meta:{
            title:'登录',
            isFooter:false,
        }
    },
    {//登录
        path:'/login',
        context:'设置密码',
        component:Login,
        exact:true,
        meta:{
            title:'登录',
            isFooter:false,
            isLogin:false
        }
    },
    {//首页
        to:'/',
        path:'/',
        context:'首页',
        component:Home,
        exact:true,
        meta:{
            title:'聚橙网',
            isFooter:true,
            isLogin:false
        }
    },
    {//城市选择
        path:'/index/selectCity',
        context:'城市定位',
        component:SelectCityme,
        meta:{
            title:'聚橙网',
            isFooter:true,
            isLogin:false
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
            isLogin:false
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
            isLogin:true
        }
    },
    {//演出详情页
        path:'/ticket/:type',
        context:'我的',
        component:Ticket,
        meta:{
            title:'聚橙网',
            isFooter:false,
            isLogin:false
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
            isLogin:true
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
            isLogin:true
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
            isLogin:true
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
            isLogin:true
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
            isLogin:true
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
            isLogin:true
        }
    },
    {//我的路由-已过期优惠券
        to:'/Myjuooo/Mycoupon?overdue=overdue',
        path:'/Myjuooo/Mycoupon?overdue=overdue',
        context:'我的',
        component:MyCouponOverdue,
        meta:{
            title:'优惠券',
            isFooter:false,
        }
    },
    {//我的路由-我的订单
        to:'/my/myOrderList',
        path:'/my/myOrderList',
        context:'我的',
        component:MyOrderList,
        meta:{
            title:'我的订单',
            isFooter:false,
        }
    },
    {//我的路由-我的卡包
        to:'/my/cardproduct/:tpye',
        path:'/my/cardproduct',
        context:'我的',
        component:Cardproduct,
        meta:{
            title:'我的卡包',
            isFooter:false,
        }
    },
    {//我的路由-实名认证
        to:'/myjuooo/myRealNameCertification',
        path:'/myjuooo/myRealNameCertification',
        context:'我的',
        component:Certification,
        meta:{
            title:'实名认证',
            isFooter:false,
        }
    },
    {//我的路由-演出日历
        to:'/calendar',
        path:'/calendar',
        context:'我的',
        component:MyCalendar,
        meta:{
            title:'演出日历',
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
            isLogin:false
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
            isFooter:false,
            isLogin:false
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
            isLogin:false
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
            isLogin:true
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
            isLogin:true
        }
    },
    //积分商城
    {
        path:'/scores/index',
        context:"积分商城",
        component:Scores,
        meta:{
            title:'聚橙网',
            isFooter:false,
        }
    },
    {
        path:'/vip/discount',
        context:"积分商城",
        component:Discount,
        meta:{
            title:'聚橙网',
            isFooter:false,
        }
    },
]