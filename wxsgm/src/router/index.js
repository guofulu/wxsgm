import Home from '../views/home/Home';
<<<<<<< HEAD
import Theatre from "../views/theatre/theatre"
import Myjuooo from "../views/myjuooo/Myjuooo"
import buy from "../components/shop/vip/buy";
=======

import Theatre from "../views/theatre/theatre";
import Myjuooo from "../views/myjuooo/Myjuooo";
import Ticket from "../views/theatre/ticket";
import Mysecurity from '../views/myjuooo/Mysecurity';
import ShowsLibrary from '../views/showsLibrary/ShowsLibrary';


>>>>>>> 5f006a46dd1f36afc923f52c36c086da07ad8eab
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
        path:'/ticket/:type',
        context:'我的',
        component:Ticket,
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
<<<<<<< HEAD
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
    
=======
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
>>>>>>> 5f006a46dd1f36afc923f52c36c086da07ad8eab

    {//演出页面
        to:'/show/showsLibrary',
        path:'/show/showsLibrary',
        context:'我的',
        component:ShowsLibrary,
        meta:{
            title:'演出',
            isFooter:false,
        }
    },
]