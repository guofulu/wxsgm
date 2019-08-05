import React from "react"
import Swiper from "swiper"
import 'swiper/dist/css/swiper.min.css'
import '../../../assets/css/BuyVip.css'
export default class BuyListBox extends React.Component{
    render(){
        return(
            <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide" style={{width:'1.8rem'}}>
                            <div className={'buy_vip_list_box_1'}>
                                <div className={'buy_vip_list_1'}></div>
                                <h5>优选购票</h5>
                            </div>
                        </div>
                        <div className="swiper-slide" style={{width:'1.8rem'}}>
                            <div className={'buy_vip_list_box_1'}>
                                <div className={'buy_vip_list_2'}></div>
                                <h5>专属票价</h5>
                            </div>
                        </div>
                        <div className="swiper-slide" style={{width:'1.8rem'}}>
                            <div className={'buy_vip_list_box_1'}>
                                <div className={'buy_vip_list_3'}></div>
                                <h5>专属折扣</h5>
                            </div>
                        </div>
                        <div className="swiper-slide" style={{width:'1.8rem'}}>
                            <div className={'buy_vip_list_box_1'}>
                                <div className={'buy_vip_list_4'}></div>
                                <h5>专享卷</h5>
                            </div>
                        </div>
                        <div className="swiper-slide" style={{width:'1.8rem'}}>
                            <div className={'buy_vip_list_box_1'}>
                                <div className={'buy_vip_list_5'}></div>
                                <h5>全场包邮</h5>
                            </div>
                        </div>
                        <div className="swiper-slide" style={{width:'1.8rem'}}>
                            <div className={'buy_vip_list_box_1'}>
                                <div className={'buy_vip_list_6'}></div>
                                <h5>双倍积分</h5>
                            </div>
                        </div>
                        <div className="swiper-slide" style={{width:'1.8rem'}}>
                            <div className={'buy_vip_list_box_1'}>
                                <div className={'buy_vip_list_7'}></div>
                                <h5>赠观演卷</h5>
                            </div>
                        </div>
                        <div className="swiper-slide" style={{width:'1.8rem'}}>
                            <div className={'buy_vip_list_box_1'}>
                                <div className={'buy_vip_list_8'}></div>
                                <h5>明星活动</h5>
                            </div>
                        </div>
                        <div className="swiper-slide" style={{width:'1.8rem'}}>
                            <div className={'buy_vip_list_box_1'}>
                                <div className={'buy_vip_list_9'}></div>
                                <h5>免费期刊</h5>
                            </div>
                        </div>
                        <div className="swiper-slide" style={{width:'1.8rem'}}>
                            <div className={'buy_vip_list_box_1'}>
                                <div className={'buy_vip_list_10'}></div>
                                <h5>生日专享</h5>
                            </div>
                        </div>
                        <div className="swiper-slide" style={{width:'1.8rem'}}>
                            <div className={'buy_vip_list_box_1'}>
                                <div className={'buy_vip_list_11'}></div>
                                <h5>敬请期待</h5>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
    componentDidMount() {
        const mySwiper = new Swiper('.swiper-container',{
            slidesPerView : 4,
            centeredSlides : false,
        })
    }

}
