import Home from '../views/home/Home';
import Theatre from "../views/theatre/theatre"
import Myjuooo from "../views/myjuooo/Myjuooo"
import buy from "../components/shop/vip/buy";
export default [
    {//首页路由
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
    {//剧院路由
        to:'/theatre/theatreList',
        path:'/theatre/theatreList',
        context:'剧院',
        component:Theatre,
        meta:{
            title:'聚橙网',
            isFooter:true,
        }
    },
    {//票夹路由
        to:'/eticket/list',
        path:'/eticket/list',
        context:'票夹',
        component:Home,
        meta:{
            title:'聚橙网',
            isFooter:false,
        }
    },
    {//我的路由
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
            title:'聚橙网',
            isFooter:false,
        }
    }
    

]