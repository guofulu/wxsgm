import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../assets/scss/vipIndex/index.scss'
import axios from 'axios';
import Grid from '../../components/VipIndex/Grid'
class VipIndx extends React.Component {

    render(){
        return (
            <div className={'vip-plus-wrapper'}>
                <div className={'vip-plus'}>
                    <section className={'vip-plus__title title-g'}>
                        <span className={'title__text'}>VIP + 会员</span>
                        <i className={"iconfont ju-icon-ellipsis title__ellipsis"}></i>
                        <i className={'iconfont ju-icon-arrow title__back'}></i>
                    </section>
                    {/* 第二部分 */}
                    <div className={'vip-plus__desc'}>
                        <div className={'vip-plus__desc__title'}></div>
                        <div className={'vip-plus__desc__content'}>
                            <Grid></Grid>
                        </div>
                    </div>
                    {/* 第三部分 */}
                    <div className={'vip-plus__desc__ad'}>
                        <NavLink to={'/null'} className={"ad-swipe"}>
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
                            专享券
                            <span className={"entry-block__title__desc"}></span>
                        </div>
                        <div className={"vip-plus-ticket-wrapper"}>
                            <div className={'vip-plus-ticket-cell vip-plus-ticket__cell'}>
                                <div className={'ticket-cell'}>
                                    <img src='' alt='' className={"ticket-cell__img"} />
                                    <div className={'ticket-cell__name'}></div>
                                </div>
                                <div className={'vip-plus-ticket-cell__price'}>

                                    <span className={'vip-plus-ticket-cell__price__desc'}>起</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 第六部分 */}
                </div>

            </div>
        )
    }
    async componentDidMount(){
        const data = await axios.post('/juoooM/Passport/doLoginRoute',{
            username:'13810459593',
            passward:'yawen521',
            loginType:1,
            regForm:2,
            isCard:0,
            next:1565183326660
        })
        console.log(3453435,data)
    }
}

export default VipIndx