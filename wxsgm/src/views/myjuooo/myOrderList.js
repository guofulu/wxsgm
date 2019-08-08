import React from "react"

import MyOrderList from "../../components/myjuooo/MyOrderList/MyOrderList"

export default class MyOrderListye extends React.Component{
    render() {
        return(
            <div>
                <MyOrderList {...this.props}></MyOrderList>
            </div>
        )
    }
}