// 实名认证

import React from "react"
import Popover from "../../public/Popover";
import "../../../assets/css/My/certification.css"

export default class MyCertification extends React.Component{
    render() {
        return(
            <div className={"Certification_warp"}>
                <div className={"navbar_on_center"}>
                    <div className={"My_left"} onClick={()=>{this.props.history.go(-1)}}>&lt;</div>
                    <div className = {"My_center"}>
                        实名认证
                    </div>
                    <Popover className={"My_rigth"}></Popover>
                </div>
                <div className={"Certification_btn"}>
                    <input type="text" placeholder={"*真实姓名"}/>
                    <input type="text" placeholder={"*身份证号码"}/>
                </div>
                <div className={"Certification_mine"}>
                    <p>
                        实名认证后不可更改或取消，请谨慎填写，
                    </p>
                    <p>聚橙网将尊重并保护您的隐私。</p>
                </div>
                <div className={"Certification_footer"}>
                    <input type="submit" value={"下一步"}/>
                </div>
            </div>
        )
    }
}