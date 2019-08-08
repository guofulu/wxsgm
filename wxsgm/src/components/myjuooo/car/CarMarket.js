import React from "react"
import Swiper from 'swiper';
import {Link} from "react-router-dom"
import 'swiper/dist/css/swiper.min.css'
import "../../../assets/css/My/car/carmarket.css"


export default class CarMarket extends React.Component{
    render() {
        console.log(666,this.props)
        return(
            <div className={"market_warp"}>
                <div className={"market_swiper"}>
                    <div className="swiper-container swiper_container_car">
                        <div className="swiper-wrapper" >
                            {
                                this.props.MyCarMarketList.data.map((v,i)=>{
                                    return(
                                        <div className="swiper-slide" key={i} >
                                            <img src={v.mb_image} alt="" style={{width:"100%",height:"100%"}}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination swiper_pagination_car"></div>
                <div className={"market_vip"}>
                    <Link className={"market_vip_font"} to={"/null"}>
                        <div className={"market_vip_font_lfet"}><span>VIP+</span>         开通VIP+,演出随心看</div>
                        <div className={"market_vip_font_right"}>&gt;</div>
                    </Link>
                    <div className={"market_vip_font_pic"}>
                        <div className={"market_vip_font_pic_null"}></div>
                        <div className={"market_vip_font_pic_one"}>
                            <p className={"market_vip_font_pic1"}></p>
                            <p className={"market_vip_font_font1"}>明星活动</p>
                        </div>
                        <div className={"market_vip_font_pic_one"}>
                            <p className={"market_vip_font_pic1"}></p>
                            <p className={"market_vip_font_font1"}>优先购票</p>
                        </div>
                        <div className={"market_vip_font_pic_one"}>
                            <p className={"market_vip_font_pic1"}></p>
                            <p className={"market_vip_font_font1"}>免费领取</p>
                        </div>
                        <div className={"market_vip_font_pic_one"}>
                            <p className={"market_vip_font_pic1"}></p>
                            <p className={"market_vip_font_font1"}>生日礼物</p>
                        </div>
                        <div className={"market_vip_font_pic_one"}>
                            <p className={"market_vip_font_pic1"}></p>
                            <p className={"market_vip_font_font1"}>专享特权</p>
                        </div>
                        <div className={"market_vip_font_pic_one"}>
                            <p className={"market_vip_font_pic1"}></p>
                            <p className={"market_vip_font_font1"}>敬请期待</p>
                        </div>
                        <div className={"market_vip_font_pic_one"}>
                            <p className={"market_vip_font_pic1"}></p>
                            <p className={"market_vip_font_font1"}>生日礼物</p>
                        </div>
                        <div className={"market_vip_font_pic_one"}>
                            <p className={"market_vip_font_pic1"}></p>
                            <p className={"market_vip_font_font1"}>敬请期待</p>
                        </div>
                        <div className={"market_vip_font_pic_one"}>
                            <p className={"market_vip_font_pic1"}></p>
                            <p className={"market_vip_font_font1"}>免费领取</p>
                        </div>
                    </div>
                </div>
                <div className={"market_car"}>

                </div>
            </div>
        )
    }
    componentDidMount() {
        var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay:true,//自动轮播
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }
}