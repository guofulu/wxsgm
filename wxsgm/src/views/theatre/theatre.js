import React from "react"
import {connect} from "react-redux"
import {NavLink} from "react-router-dom"
import {bindActionCreators} from 'redux'
import Horizontal from "../../components/theatre"
import theaterCreator from "../../store/actionCreator/theatre";
import "../../assets/css/theatre.css"
class Theatre extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className={"app"}>
           <nav className={"title"}>
               <h3 className={"title-single"}>剧院</h3>
           </nav>
                <div className={"content"}>
                {
                    this.props.TheatreList.map((v,i)=>{
                        return (
                            <div key={i} className={"thenter"}>
                               <div className={"theater-info-shows"}>
                                   <NavLink to={"/theatre/index"}>
                                       <div className={"theater-pic"} >
                                           <img src={v.pic} alt={""}/>
                                       </div>
                                       <div className={"theater-title"}>
                                           <p className={"title-name"}>{v.name}</p>
                                           <p className={"title-count"}>{v.count}场在售演出</p>
                                       </div>
                                   </NavLink>
                                   <NavLink to={"/theatre/index/"}>
                                       <div style={{width:"10px",height:"10px"}}>
                                       <img  style={{width:"100%",height:"100%"}} src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMTg1ODliMS01OTczLTViNGQtYjI4MC03NjY1YjBkODYxODgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkJERDhERTY1NDU2MTFFOUE5RjE5ODQyNDk4MDU5QkIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkJERDhERTU1NDU2MTFFOUE5RjE5ODQyNDk4MDU5QkIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YWI2MGY3MDEtMGRjMi01ODQwLTgzOWItMjZiZjRkYTFlNzcyIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NzIyZTVhNjctNDNhMi0xMWU5LTkwNmYtYWE5ZmI0OGRjNGEwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+qADHOAAAANFJREFUeNpi/P//PwM9ARMDncGohaMWjlo4Ai1kSU9P5wHSU4A4Aoh/AfE0IK7eu3fvX3TFzs7ObECqH4gToEILgLgQqPYXFrXMQKoViLOAGKRvBRDnsACJCUAcD1XHDsTlQPweiDuxOLAFagAMgNhfgbgMi9oSqFkwALLjLyhIo7AojsIRIpSqjWTCEY+MtEw0K7GIr8ShfhmRYrjEl4PiMAdqcRgQ/wbi6UDcgcOQGiDmRks0NTjU9gCxIFqiyWccrYBHLRy1cNTC4WchQIABAOD3K3WFJTtNAAAAAElFTkSuQmCC"} alt={""}/>
                                       </div>
                                   </NavLink>
                               </div>
                                <div style={{width:"100%",
                                    height:"210px",}}>
                                    {
                                    this.props.TheatreList? <Horizontal history={this.props.history}  {...v}></Horizontal>:null
                                 }

                                </div>
                            </div>

                        )
                    })

                }
                </div>

            </div>
        )
    }
    componentDidMount() {
        this.props.getTheatreList()

    }
    componentWillReceiveProps(nextProps, nextContext) {
    }


}
export default connect((state)=>({
    TheatreList:state.theatre.TheatreList,
}),(dispatch)=>bindActionCreators(theaterCreator,dispatch))(Theatre)
