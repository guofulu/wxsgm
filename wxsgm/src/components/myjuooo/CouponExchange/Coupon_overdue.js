import React from "react"
import Popover from "../../public/Popover";
import "../../../assets/css/My/couponExchange.css"
export default class CouponOverdue extends React.Component{
    render() {
        return(
            <div>
                <div className={"navbar_on_center"}>
                    <div className={"My_left"} onClick={()=>{this.props.history.go(-1)}}>&lt;</div>
                    <div className = {"My_center"}>
                        已过期优惠券
                    </div>
                    <Popover className={"My_rigth"}></Popover>
                </div>
            </div>

        )
    }
}