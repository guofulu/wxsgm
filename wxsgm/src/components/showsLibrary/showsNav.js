import React from "react"
import {Link} from "react-router-dom"
import "../../assets/css/My/MyshowNav.css"
export default class ShowsNav extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        // console.log(8888,this.props)
        return(
            <div className={"showNav"}>
                <div className={"showNull"}></div>
                <ul className={"showUl"}>
                    <li onClick={this.props.getShowList.bind(this,0)}>全部</li>
                    {
                        this.props.Show_category_list.map((v,i)=>{
                            return(
                                <li key={i} onClick={this.props.getShowList.bind(this,v.category_id)}>{v.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}