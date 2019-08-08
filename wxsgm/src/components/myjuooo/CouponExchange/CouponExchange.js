import React from "react"


import Popover from "../../public/Popover";
import "../../../assets/css/My/couponExchange.css"
import CouponRuels from "./Coupon_ruels"
export default class CouponExchange extends React.Component{
    render(){
        return(
            <div className={"coupon"}>
                <div className={"navbar_on_center"}>
                    <div className={"My_left"} onClick={()=>{this.props.history.go(-1)}}>&lt;</div>
                    <div className = {"My_center"}>
                        优惠券
                    </div>
                    <Popover className={"My_rigth"}></Popover>
                </div>
                <div className={"coupon_wrap"}>
                    <div className={"coupon_input_main"}>
                        <div className={"coupon_input"}>
                            <input className={"coupon_input"} type="text" placeholder={"        请输入优惠券码"}/>
                        </div>
                        <div className={"coupon_input_rig"}>
                            兑换
                        </div>
                    </div>
                    <div className={"coupon_main"}>
                        <p className={"coupon_main_left"}><i style={{color:"#df5000"}}>0</i>张未使用</p>
                        <CouponRuels></CouponRuels>
                    </div>
                    <div className={"coupon_footer"}>
                        <div className={"coupon_footer_main"}>
                            <p>查看已过期优惠券</p>
                            <i>&gt;</i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}