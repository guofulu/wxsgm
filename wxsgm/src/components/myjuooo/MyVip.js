import React from "react"
import {
    Link
} from "react-router-dom"

export default class MyVip extends React.Component{
    render() {
        return(
            <div className={"mine_vip"}>
                <Link to={"/shop/vip/buy"}>
                    <img src="https://m.juooo.com/static/img/ad.411f5e6.png" alt=""/>
                </Link>
            </div>
        )
    }
}