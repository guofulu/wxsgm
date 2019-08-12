import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../assets/scss/vipIndex/index.scss';
import Grid from '../../components/VipIndex/Grid';
import vipCreator from '../../store/actionCreator/vipIndex/index';
import PriorBuy from '../../components/VipIndex/PriorBuy';
import VipDiscount from '../../components/VipIndex/VipDiscount';
import VipFreeView from '../../components/VipIndex/VipFreeView';
import Popover from "../../components/public/Popover";
import  CommonTitle from  '../../common/commonTitle'




class VipIndx extends React.Component {


    render(){
        return (
            <div className={'vip-plus-wrapper'}>
                <div className={'vip-plus'}>

                    <CommonTitle commonTitle={'VIP + 会员'} history={this.props.history}></CommonTitle>
                    {/* <section className={'vip-plus__title title-g'}>
                        <span className={'title__text'}>VIP + 会员</span>
                        <i className={"iconfont ju-icon-ellipsis title__ellipsis"}></i>
                        <i className={'iconfont ju-icon-arrow title__back'}></i>
                    </section> */}

                    {/*<div className={"navbar_on_center"} style={{zIndex:'88'}}>*/}
                        {/*<div className={"My_left"} onClick={()=>{this.props.history.go(-1)}}>&lt;</div>*/}
                        {/*<div className = {"My_center"}>*/}
                            {/*VIP + 会员*/}
                        {/*</div>*/}
                        {/*<Popover className={"My_rigth"}></Popover>*/}
                    {/*</div>*/}
                    {/* 第二部分 */}
                    <div className={'vip-plus__desc'}>
                        <div className={'vip-plus__desc__title'}></div>
                        <div className={'vip-plus__desc__content'}>
                            <Grid {...this.props}></Grid>
                        </div>
                    </div>
                    {/* 第三部分 */}
                    <div className={'vip-plus__desc__ad'}>
                        <NavLink to={'/plus/index'} className={"ad-swipe"}>
                            <img src={'https://image.juooo.com/group1/M00/02/D0/rAoKmV0jYo-AFJm6AABjBMdPbE4256.png'} alt='' className={'ad-swipe__swipe__item__img'} />
                        </NavLink>
                        
                    </div>
                    {/* 第四部分 */}
                    <div className={'entry-block vip-plus__coupon'}>
                        <div className={"entry-block__title"}>
                            专享券
                            <span className={"entry-block__title__desc"}></span>
                        </div>
                        <div className={"vip-plus__coupon__swipe-wrapper"}>
                            
                            <div className={'coupon'}>
                                <div className={'coupon__discount'}>
                                    <div className={'coupon__discount__first'}>
                                        <span className={"reduce-unit"}>￥</span>
                                        <span className={"reduce-value"}>100</span>
                                    </div>
                                    <div className={'coupon__discount__third-fourth'}>
                                        满180元可用
                                    </div>
                                </div>
                                <div className={'coupon__desc'}>V+专享100元—合肥</div>
                                <div className={'coupon__date'}>有效期：2018.12.13 - 2019.12.31</div>
                                <div className={'coupon__get'}>立即领取</div>
                                <div className={'coupon__tag'}></div>
                            </div>    
                        </div>
                    </div>
                    {/* 第五部分 */}
                   
                    <div className={"entry-block vip-plus__ticket"}>
                        <div className={"entry-block__title"}>
                            专属票
                            <span className={"entry-block__title__desc"}></span>
                        </div>
                        <div className={"vip-plus-ticket-wrapper"}>
                            <div className={'vip-plus-ticket-cell vip-plus-ticket__cell'}>
                                <NavLink to={'/ticket/'+this.props.ExclusiveList.list[0].schedular_id} className={'ticket-cell'} style={{display:'block'}}>
                                    <img src={this.props.ExclusiveList.list[0].pic} alt='' className={"ticket-cell__img"}  />
                                    <div className={'ticket-cell__name'}>
                                        {this.props.ExclusiveList.list[0].schedular_name }
                                    </div>
                                </NavLink>
                                <div className={'vip-plus-ticket-cell__price'}>
                                    {this.props.ExclusiveList.list[0].min_price || ''}
                                    <span className={'vip-plus-ticket-cell__price__desc'}>起</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* 第六部分 */}
                    {
                        this.props.PriorBuyList.list?<PriorBuy {...this.props}></PriorBuy>:null
                    }
                    {/* 第七部分 */}
                    {
                        this.props.DiscountList.list?<VipDiscount {...this.props}></VipDiscount>:null
                    }
                    {
                        this.props.WatchPerList.list?<VipFreeView {...this.props}></VipFreeView>:null
                    }
                    <button className={' vip-plus__btn-vip '} onClick={()=>{this.props.history.push('/shop/vip/buy')}}>
                        立即开通 
                        <span className={'vip-plus__btn__price'}>￥99</span>
                        <span className={'vip-plus__btn__unit'}>/年</span>
                    </button>
                </div> 

            </div>
        )
    }
    componentDidMount(){
        this.props.getPriorBuyList();
        this.props.getCouponsList();
        this.props.getExclusiveList();
        this.props.getDiscountList();
        this.props.getWatchPerList();
        this.props.getWatchPerInfo();
    }
}

export default connect((state)=>({
    PriorBuyList:state.vipIndex.PriorBuyList,
    CouponsList:state.vipIndex.CouponsList,
    ExclusiveList:state.vipIndex.ExclusiveList,
    DiscountList:state.vipIndex.DiscountList,
    WatchPerList:state.vipIndex.WatchPerList,
    WatchPerInfo:state.vipIndex.WatchPerInfo,

}),(dispatch)=>bindActionCreators(vipCreator,dispatch))(VipIndx)