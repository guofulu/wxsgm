//此为首页组件
import React from 'react';
import { connect } from 'react-redux';//高阶组件
import {bindActionCreators} from 'redux'
import homeCreator from '../../store/actionCreator/home';//首页的数据请求方法集合
import '../../assets/scss/home/index.scss'
import Banner from '../../components/home/Banner';
import Adeertion from '../../components/home/AdvertionWrap';
import HotBlock from '../../components/home/HotBlock';
import TourBlock from '../../components/home/TourBlock';
import VipBlock from '../../components/home/VipBlock';
import CategoryBlock from '../../components/home/CategoryBlock';
import HotVenue from "../../components/home/HotVenue"
import RecommendBlock from '../../components/home/RecommendBlock';

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            isMore:1,
            isPage:1
        }
    }
    componentDidMount(){

        this.props.getClassifyHome();//获取分类列表
        this.props.getFloorShow();//获取楼层信息
        this.props.getHotsRecommendList();//获取照片推荐列表
        this.props.getRecommendShow();//获取推荐信息列表
        this.props.getRegisterCoupon();//获取注册优惠券信息
        this.props.getVipHomeSchedular();//获取vip相关信息列表
        this.props.getHotTheatre();
        this.props.getTourRecommendList();
    }
    changeHeader(){
        if(typeof(this.refs.header) !== 'undefined'){
            let  scrollY = window.scrollY;
            let  headerHeight = 44;
            if(headerHeight > scrollY){
                //console.log('大于')
                this.refs.header.id = ''
            }
            if(headerHeight < scrollY){
                //console.log('小于')
                this.refs.header.id = 'header-active'
            }
        }

    }
    moreRecommendBlock(){

        if(typeof(this.refs.home) !== 'undefined'){
            let juli = this.refs.home.offsetHeight - window.scrollY;

            if(juli < 1500){
                if(this.state.isMore){
                    this.state.isMore = 0
                    this.props.getRecommendShow(++this.state.isPage);
                    // console.log(this.state.isPage)
                }
            }
        }
    }
    componentDidUpdate(){
        this.state.isMore = 1;
        // console.log('回来了',this.state.isMore)
    }
    componentWillMount(){
        window.addEventListener('scroll',()=>{          
            //console.log(919191,window.scrollY,this.refs.home.offsetHeight)
            this.changeHeader.call(this);
            this.moreRecommendBlock.call(this);
            
        })
        
    }
    
    render(){
        console.log(4343434343,this.props,this.props.VipHomeSchedular)
        return (
            <div className={'home'} ref={'home'}>
                    <header className={'Header'} ref={'header'}>
                        <div className={'home-location'}>
                            <i className={'iconfont icon-dingwei'}></i>
                            <span onClick={()=>this.props.history.push('/null')} >全国</span>
                        </div>
                        <div className={'home-search'} onClick={()=>{
                            this.props.history.push("/search/index")
                        }}>
                            <img src='https://m.juooo.com/static/img/nav_icon_search.f194288.png' alt='' />
                            <span>搜索热门演出</span>
                        </div>
                        <div className='home-right'>
                            <img style={{width:'.52rem',height:'.50rem'}} src='https://image.juooo.com/group1/M00/02/65/rAoKmVyvD7iAHJX4AAADmpmoUeI150.png' alt='' />
                        </div>
                    </header>
                
                    <div className={'banner'}>
                        {
                            this.props.ClassifyHome.slide_list?<Banner slide_list={this.props.ClassifyHome.slide_list} ></Banner>:null
                        }
                    </div>
                    {
                        this.props.VipHomeSchedular.priorList &&  this.props.ClassifyHome.slide_list?<Adeertion {...this.props}></Adeertion>:null
                    }

                    {
                        this.props.HotsRecommendList.hots_show_list?<HotBlock {...this.props.HotsRecommendList}></HotBlock>:null
                    }

                    {
                        this.props.TourRecommendList.tour_show_list?<TourBlock {...this.props.TourRecommendList}></TourBlock>:null
                    }
                    {
                        this.props.VipHomeSchedular.discountList?<VipBlock {...this.props.VipHomeSchedular} ></VipBlock>:null
                    }
                    <div className={'category-block category-wrap'}>
                        {
                        this.props.FloorShow.length>0?<CategoryBlock FloorShow={this.props.FloorShow}></CategoryBlock>:null
                        }
                    </div>
                    {
                        this.props.HotTheatre.theatre_list?<HotVenue HotTheatre={this.props.HotTheatre}></HotVenue>:null
                    }
                    {
                        this.props.RecommendShow.recommend_show_list?<RecommendBlock RecommendShow={this.props.RecommendShow}></RecommendBlock>:null
                    }

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
    VipHomeSchedular:state.home.VipHomeSchedular,
    HotTheatre:state.home.HotTheatre,
    TourRecommendList:state.home.TourRecommendList
}),(dispatch)=>bindActionCreators(homeCreator,dispatch))(Home)