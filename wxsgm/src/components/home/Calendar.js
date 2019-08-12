import React from "react"
import Popover from "../../components/public/Popover";

export default class Calendar extends React.Component{
    render() {
        return(
            <div className={"Calendar_warp"}>
                <div className={"navbar_on_center"}>
                    <div className={"My_left"} onClick={()=>{this.props.history.go(-1)}}>&lt;</div>
                    <div className = {"My_center"}>
                        演出日历
                    </div>
                    <Popover className={"My_rigth"}></Popover>
                </div>
            </div>
        )
    }
}