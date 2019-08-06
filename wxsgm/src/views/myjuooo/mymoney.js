import React from "react"

import MyPrice from "../../components/myjuooo/MyPrice/MyPrice"

export default class MyMoney extends React.Component{
    render() {
        return(
            <div>
                <MyPrice {...this.props}></MyPrice>
            </div>
        )
    }
}