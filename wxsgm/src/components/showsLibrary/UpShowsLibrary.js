import React from "react"
import {Link} from "react-router-dom"
export default class UpShowsLibrary extends React.Component{
    render() {
        return(
            this.props.ShowsLibrary.map((v,i)=>{
                return(
                    <ul className={"library_main"} key={i}>
                        <li className={"library_li"}>
                            <div className={"library_left"}>
                                <img src={v.pic} alt=""/>
                            </div>
                            <div className={"library_right"}>
                                <p className={"library_time"}>{v.show_time_top}</p>
                                <Link className={"library_name"} to={"/null"}>{v.name}</Link>
                                <p className={"venue_name"}>{v.city_name}   |    {v.venue_name}</p>
                                <p className={"tag_icon"}>￥80</p>
                            </div>
                        </li>
                    </ul>
                )
            })
        )
    }
}

