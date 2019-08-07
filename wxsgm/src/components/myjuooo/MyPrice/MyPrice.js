import React from "react"
import Popover from "../../public/Popover";
import "../../../assets/css/My/MyMoney.css"

export default class MyPrice extends React.Component{
    render() {
        return(
            <div className={"My_big"}>
                <div className={"navbar_on_center"}>
                    <div className={"My_left"} onClick={()=>{this.props.history.go(-1)}}>&lt;</div>
                    <div className = {"My_center"}>
                        账户设置
                    </div>
                    <Popover className={"My_rigth"}></Popover>
                </div>
                <div className={"My_price_mine"}>
                    <div className={"My_price"}>
                        <p className={"My_price_top"}>账户余额（元）</p>
                        <p className={"My_price_bot"}>999999.00</p>
                    </div>
                    <div className={"My_price_botton"}>
                        <div className={"My_price_botton_top"}>余额信息</div>
                        <div className={"My_price_botton_bot"}>没有消息记录</div>
                    </div>
                </div>
            </div>
        )
    }
}