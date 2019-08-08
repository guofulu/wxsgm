import React from "react"
import {Link} from "react-router-dom"
import "../../../assets/css/My/MyshowNav.css"
import Popover from "../../public/Popover";
export default class MyOrderList extends React.Component{
    render(){
        return (
            <div>
                <div className={"navbar_on_center"}>
                    <Link className={"My_left"} to={"/"}>&lt;</Link>
                    <div className = {"My_center"}>
                        我的订单
                    </div>
                    <Popover></Popover>
                </div>
                <div style={{width:"5rem",height:"5rem"}}>
                    <img src="../../../assets/img/eticket.png" alt=""/>
                </div>
            </div>
        )

    }
}