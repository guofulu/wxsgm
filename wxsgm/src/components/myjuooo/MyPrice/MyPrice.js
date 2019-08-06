import React from "react"
import Popover from "../../public/Popover";

export default class MyPrice extends React.Component{
    render() {
        return(
            <div>
                    <div className={"navbar_on_center"}>
                        <div className={"My_left"} onClick={()=>{this.props.history.go(-1)}}>&lt;</div>
                        <div className = {"My_center"}>
                            账户余额
                        </div>
                        <Popover className={"My_rigth"}></Popover>
                    </div>
                <div className={"My_price_mine"}>
                    <div className={"My_price"}>
                        <p>账户余额（元）</p>
                        <p>0.00</p>
                    </div>
                    <div className={"part integral-wrap"}>
                        <div>余额信息</div>
                        <div>没有消息记录</div>
                    </div>
                </div>
            </div>
        )
    }
}