import Home from '../views/home/Home';
import Theatre from "../views/theatre/theatre"
import Myjuooo from "../views/myjuooo/Myjuooo"
<<<<<<< HEAD
import Ticket from "../views/theatre/ticket"
=======
import Mysecurity from "../views/myjuooo/Mysecurity"
import ShowsLibrary from "../views/showsLibrary/ShowsLibrary"
>>>>>>> d120a35c5ffbaa44b9448d9c4cb033d827e60dfa
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

>>>>>>> d120a35c5ffbaa44b9448d9c4cb033d827e60dfa

]