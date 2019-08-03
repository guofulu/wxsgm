//此为首页组件
import React from 'react';
import { connect } from 'react-redux';//高阶组件
import {bindActionCreators} from 'redux'
import homeCreator from '../../store/actionCreator/home';//首页的数据请求方法集合
import '../../assets/scss/home/index.scss'
import Banner from '../../components/home/banner'

class Home extends React.Component{
    componentDidMount(){
        this.props.getClassifyHome();//获取分类列表
        this.props.getFloorShow();//获取楼层信息
        this.props.getHotsRecommendList();//获取照片推荐列表
        this.props.getRecommendShow();//获取推荐信息列表
        this.props.getRegisterCoupon();//获取注册优惠券信息
        this.props.getVipHomeSchedular();//获取vip相关信息列表
    }
    componentDidUpdate(){
        // console.log(888,this.props.ClassifyHome)
    }
    render(){

        return (
            <div>
                <header>
                    <div className={'home-loaction'}>
                        <i className={'iconfont icon-dingwei'}></i>
                        <span style={{fontSize:'.3rem',color:'#000',fontWeight:'900'}}>全国</span>
                    </div>
                    <div className={'home-search'}>
                        <img src='https://m.juooo.com/static/img/nav_icon_search.f194288.png' alt='' />
                        <span>搜索热门演出</span>
                    </div>
                    <div className='home-right'>
                        <img style={{width:'.52rem',height:'.50rem'}} src='https://image.juooo.com/group1/M00/02/65/rAoKmVyvD7iAHJX4AAADmpmoUeI150.png' alt='' />
                    </div>
                </header>
                <div className={'banner'}>
                    {
                        this.props.ClassifyHome.slide_list?<Banner slide_list={this.props.ClassifyHome.slide_list}></Banner>:null
                    }
                </div>
                <div className={'advertion-wrap'}>

                </div>
            </div>
        )
    }
}

export default connect((state)=>({
    RegisterCoupon:state.home.RegisterCoupon,
    ClassifyHome:state.home.ClassifyHome,
    HotsRecommendList:state.home.HotsRecommendList,
    FloorShow:state.home.FloorShow,
    RecommendShow:state.home.RecommendShow,
    VipHomeSchedular:state.home.VipHomeSchedular
}),(dispatch)=>bindActionCreators(homeCreator,dispatch))(Home)