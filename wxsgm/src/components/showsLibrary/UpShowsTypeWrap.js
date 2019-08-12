import React from "react"
import {Link} from "react-router-dom"
export default class UpShowsTypeWrap extends React.Component{
    render() {
        console.log(12312131,this.props.Shows_type_wrap)
        return(
            this.props.Shows_type_wrap.map((v,i)=>{
                return(
                    <ul className={"library_main"} key={i}>
                        <Link  to={"/ticket/"+v.schedular_id/1}>
                            <li className={"library_li"}>
                                <div className={"library_left"}>
                                    <img src={v.pic} alt=""/>
                                </div>
                                <div className={"library_right"}>
                                    <p className={"library_time"}>{v.show_time_top}</p>
                                    <p className={"library_name"}  to={"/ticket/"+v.schedular_id/1}>{v.name}</p>
                                    <p className={"venue_name"}>{v.city_name}   |    {v.venue_name}</p>
                                    <p className={"tag_icon"}>￥80</p>
                                </div>
                            </li>
                        </Link>
                    </ul>
                )
            })
        )
    }

}