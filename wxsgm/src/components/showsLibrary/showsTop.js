import React from "react"
import {Link} from "react-router-dom"
export default class showsTop extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={"navbar_on_center"}>
                <div className={"My_left"} onClick={()=>{this.props.history.go(-1)}}>&lt;</div>
                <div className = {"My_center"}>
                    演出
                </div>
                <div className={"My_rigth"}>...</div>
            </div>
        )
    }
}