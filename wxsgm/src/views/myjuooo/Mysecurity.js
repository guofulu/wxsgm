import React from "react"
import "../../assets/css/My/Mysecurity.css"
import Mylibrary from "../../components/myjuooo/Mylibrary"
import {
    Link
} from "react-router-dom"

export default class Mysecurity extends React.Component{
    render(){
        return(
            <div className={"views"}>
                <div className={"navbar"}>
                    <Mylibrary {...this.props}/>
                </div>
            </div>
        )
    }
}