import Home from '../views/home/Home';

export default [
    {
        to:'/',
        path:'/',
        context:'首页',
        component:Home,
        exact:true,
        meta:{
            title:'聚橙网-首页',
            isFooter:true
        }
    }
]