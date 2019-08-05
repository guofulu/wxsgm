import React from "react"
import {
    Link
}from "react-router-dom"
import "../../../assets/css/My/mygrid.css"
export default class MyGridBon extends React.Component{
    render(){
        return(
            <div className={"grid grid_title_Top"}>
                <div className={"grid_title_wrap grid_margin"}>
                    <span className={"grid_title_wrap_left"}>手机号</span>
                </div>
                <div className={"grid_title_wrap "}>
                    <span className={"grid_title_wrap_left"}>邮箱</span>
                </div>
                <div className={"grid_title_wrap"}>
                    <span className={"grid_title_wrap_left"}>生日信息      <b>(只允许设置一次)</b></span>
                    <Link to={"/null"} class={"grid_title_wrap_rigth"}>去完善</Link>
                </div>
                <div className={"grid_title_wrap"}>
                    <span className={"grid_title_wrap_left"}>登录密码</span>
                    <Link to={"/null"} class={"grid_title_wrap_rigth"}>修改</Link>
                </div>
                <div className={"grid_title_wrap"}>
                    <span className={"grid_title_wrap_left"}>支付密码</span>
                    <Link to={"/null"} class={"grid_title_wrap_rigth"}>设置</Link>
                </div>
                <div className={"grid_title_wrap"}>
                    <span className={"grid_title_wrap_left"}>实名认证</span>
                    <Link to={"/null"} class={"grid_title_wrap_rigth"}>未认证</Link>
                </div>
            </div>
        )
    }
}