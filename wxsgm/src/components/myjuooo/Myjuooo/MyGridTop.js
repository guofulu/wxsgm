import React from "react"
import "../../../assets/css/My/mygrid.css"
export default class MyGridTop extends React.Component{
    render(){
        return(
                <div className={"grid grid_title_Top"}>
                    <div className={"grid_title_wrap grid_title_pic"}>
                        <span className={"grid_title_wrap_left"}>头像</span>
                        <img className={"grid_title_wrap_rigth"} src="https://image.juooo.com/group1/M00/03/6F/rAoKNV0XF2uABEtSAAANUrP00o0602.png" alt=""/>
                    </div>
                    <div className={"grid_title_wrap"}>
                        <span className={"grid_title_wrap_left"}>昵称</span>
                    </div>
                </div>
        )
    }
}