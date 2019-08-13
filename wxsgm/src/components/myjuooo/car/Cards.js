import React from "react"
import Swiper from 'swiper';
import {Link} from "react-router-dom"
import 'swiper/dist/css/swiper.min.css'
import "../../../assets/css/My/car/carmarket.css"
export default class Cards extends React.Component{
    render() {
        return(
            <div>
                {
                    this.props.MyCardsList.data.store_card.map((v,i)=>{
                    return(
                    <div className={"market_car"} key={i}>
                        <div className={"marker_car_cards"}>
                            <div className={"marker_car_cards_h3"}>储值卡</div>
                            <p>全国通用，购卡充值送100元</p>
                        </div>
                        <div className={"market_car_puls"}>
                                <p className={"market_car_left"}>
                                    <img src={v.card_image} alt=""/>
                                </p>
                            <span className={"market_car_right"}>
                                <h5 className={"market_car_right_top"}>橙PLUS卡</h5>
                                <b className={"market_car_right_center"}>有效期：长期有效</b>
                                <p className={"market_car_right_bot"}>{v.card_price}   <b className={"market_car_right_bot_left"}>赠VIP+</b></p>
                            </span>
                        </div>
                    </div>
                    )
                })
                }
                <div className={"market_car"}>
                    <div className={"marker_car_cards"}>
                        <div className={"marker_car_cards_h3"}>品类·次卡</div>
                    </div>
                {
                    this.props.MyCardsList.data.cate_card.map((v,i)=>{
                        return(
                                <div className={"market_car_puls"}  key={i}>
                                    <p className={"market_car_left"}>
                                        <img src={v.card_image} alt=""/>
                                    </p>
                                    <span className={"market_car_right"}>
                                        <h5 className={"market_car_right_top"}>{v.name}</h5>
                                        <b className={"market_car_right_center"}>有效期：12个月</b>
                                        <p className={"market_car_right_bot"}>{v.card_price}</p>
                                    </span>
                                </div>

                        )
                    })
                }
                </div>
                <div className={"market_car"}>
                    <div className={"marker_car_cards"}>
                        <div className={"marker_car_cards_h3"}>城市·次卡</div>
                    </div>
                    {
                        this.props.MyCardsList.data.once_card.map((v,i)=>{
                            return(
                                <div className={"market_car_puls"}  key={i}>
                                    <p className={"market_car_left"}>
                                        <img src={v.card_image} alt=""/>
                                    </p>
                                    <span className={"market_car_right"}>
                                        <h5 className={"market_car_right_top"}>{v.name}</h5>
                                        <b className={"market_car_right_center"}>有效期：{v.avail_mouth}</b>
                                        <p className={"market_car_right_bot"}>{v.card_price} </p>
                                    </span>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
