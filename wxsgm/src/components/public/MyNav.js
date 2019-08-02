import React from 'react';
import router from '../../router';
import '../../assets/scss/MyNav.scss'
import {
    NavLink
} from 'react-router-dom';
class MyNav extends React.Component{

    render(){
        return(
            <div className={"MyNav"}> 
                <NavLink to={'/'} exact className={'nav-Link'} activeClassName={'active-Link'}>
                    <i className={'iconfont icon-shouye4'}></i>
                    <span>首页</span>
                </NavLink>
                <NavLink to={'/theatre/theatreList'} exact className={'nav-Link'} activeClassName={'active-Link'}>
                    <i className={'iconfont icon-zuoweianpai'} ></i>
                    <span>剧院</span>
                </NavLink>
                <NavLink to={'/eticket/list'} exact className={'nav-Link'} activeClassName={'active-Link'}>
                    <i className={'iconfont icon-menpiao'}></i>
                    <span>票夹</span>
                </NavLink>
                <NavLink to={'/myjuooo/myjuooo'} exact className={'nav-Link'} activeClassName={'active-Link'}>
                    <i className={'iconfont icon-wode1'}></i>
                    <span>我的</span>
                </NavLink>

            </div>
        )
    }
} 
export default MyNav

