import React from "react"
import {Link} from "react-router-dom"
import MyGridTop from "./Myjuooo/MyGridTop"
import MyGridBon from "./Myjuooo/MyGridBon"
import Popover from "../public/Popover"
export default class Mylibrary extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props)
        return(
                <div className={"mysecurity"}>
                    <div className={"navbar_on_center"}>
                        <div className={"My_left"} onClick={()=>{this.props.history.go(-1)}}>&lt;</div>
                        <div className = {"My_center"}>
                            账户设置
                        </div>
                        <Popover className={"My_rigth"}></Popover>
                    </div>
                    <div className={"panel"}>
                        <MyGridTop></MyGridTop>
                        <MyGridBon></MyGridBon>
                    </div>
                    <div>
                        <Link className={"grid_btn"} to={"/"}>退出登录</Link>
                    </div>
                </div>
        )
    }
}