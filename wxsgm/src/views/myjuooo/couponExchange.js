import React from "react"
import CouponExchange from "../../components/myjuooo/CouponExchange/CouponExchange"

export default class MyCouponExchange extends React.Component{
    render() {
        console.log(this.props)
        return(
            <CouponExchange {...this.props}></CouponExchange>
        )
    }
}