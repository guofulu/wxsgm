import React from "react"
import {Link} from "react-router-dom"
import "../../assets/css/My/MyshowNav.css"
export default class ShowsNav extends React.Component{
    constructor(props){
        super(props)
        this.state=({
            index:0
        })
    }
    changeColor(index){
        this.setState({
            index
        })
    }
    render(){
        // console.log(8888,this.props)
        return(
            <div className={"showNav"}>
                <div className={"showNull"}></div>
                <p className={"show_p"} onClick={this.props.getShowListYes.bind(this,{type:0})}>
                    <b>全部</b>
                </p>
                <ul className={"showUl active"}>
                    {
                        this.props.Show_category_list.map((v,i)=>{
                            return(
                                <li key={i} onClick={this.props.getShowListYes.bind(this,{type:v.category_id})}>
                                    <p onClick={this.changeColor.bind(this,i)} style={{color:i===this.state.index?"red":null}}>{v.name}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}