import React from "react"
import Popover from "../../public/Popover";

export default class Myintegral extends React.Component{
    render() {
        return(
            <div className={"My_big"}>
                <div className={"navbar_on_center"}>
                    <div className={"My_left"} onClick={()=>{this.props.history.go(-1)}}>&lt;</div>
                    <div className = {"My_center"}>
                        我的积分
                    </div>
                    <Popover className={"My_rigth"}></Popover>
                </div>
                <div className={"My_price_mine"}>
                    <div className={"My_price"}>
                        <p className={"My_price_rules"}>积分规则</p>
                        <p className={"My_price_top"}>可用积分</p>
                        <p className={"My_price_bot"}>999999.00</p>
                        <p className={"My_price_shop"}>积分商城</p>
                    </div>
                    <div className={"My_price_botton"}>
                        <div className={"My_price_botton_top"}>积分明细</div>
                        <div className={"My_price_for"}>
                            {
                                <div className={"My_price_for_info"}>
                                    <div className={"My_price_for_info_left"}>
                                        <p>每日登陆</p>
                                        <p>2020-12-12</p>
                                    </div>
                                    <p className={"My_price_for_rig"}>+2</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}