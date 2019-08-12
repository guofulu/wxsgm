import React from "react"
import "../../assets/css/My/MyshowNav.css"
export default class ShowsNav extends React.Component{
    constructor(props){
        super(props)
        this.state=({
            color:"red"
        })
    }
    render(){
        // console.log(8888,this.props)
        return(
            <div className={"showNav"}>
                <div className={"showNull"}></div>
                <ul className={"showUl active"}>
                    <li onClick={this.props.getShowListYes.bind(this,{type:0})}>全部</li>
                    {
                        this.props.Show_category_list.map((v,i)=>{
                            return(
                                <li key={i} onClick={this.props.getShowListYes.bind(this,{type:v.category_id})}>
                                    {v.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}