import React from "react"
import {Link} from "react-router-dom"
export default class Mylibrary extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props)
        return(
                <div className={"navbar_on_center"}>
                    <div className={"My_left"} onClick={()=>{this.props.history.go(-1)}}>&lt;</div>
                    <div className = {"My_center"}>
                        账户设置
                    </div>
                    <div className={"My_rigth"}>...</div>
                </div>
        )
    }
}