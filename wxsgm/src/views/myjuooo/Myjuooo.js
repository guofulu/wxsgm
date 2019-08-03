import React from "react"
import "../../assets/css/My/Myjuooo.css"
import MyInfo from "../../components/myjuooo/MyInfo"
import MyVip from "../../components/myjuooo/MyVip"
import MySetting from "../../components/myjuooo/MySetting"

export default class Myjuooo extends React.Component{
    render() {
        return(
            <div className={"mine"}>
                <div className={"mine_body"}>
                    <MyInfo></MyInfo>
                    <MyVip></MyVip>
                    <MySetting></MySetting>
                </div>
                <div className={"mine_footer"}>
                </div>
            </div>
        )
    }
}